import type { NextApiRequest, NextApiResponse } from 'next';

// @ts-ignore
import NextCors from 'nextjs-cors';
import { feedback } from '../../lib/constants/data-types';

import * as mongodb from 'mongodb';

const url: string = process.env.MONGOSERVER!; //authenticate

const client = new mongodb.MongoClient(url);

const insertData = async (get: string, data?: any) => {
	try {
		await client.connect();

		const mount = async () => {
			// load certs and pass it to express route for processing.
			return await client.db('portfolio2022').collection(get).insertOne(data);
		};

		const result = await mount();
		return result ? 'success' : 'error';
	} catch (e) {
		console.error(e);
	}
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	/*set up cors for sending cors info*/
	await NextCors(req, res, {
		// Options
		methods: ['POST'],
		origin: '*',
	});

	const feedbackDetails: feedback = {
		feedback: '',
		name: 'Anon',
	};

	if (req.body) {
		for (const key in req.body) {
			feedbackDetails[key as keyof feedback] = req.body[key as keyof feedback];
		}
	} else {
		res.status(400).json({ message: 'data error' });
	}
	if (feedbackDetails.feedback) {
		try {
			const action = await insertData('feedback', feedbackDetails);
			if (action === 'success') {
				res.status(200).json({ message: 'feedback added successfully' });
			} else {
				res.status(400).json({ message: 'error adding feedback' });
			}
		} catch (err) {
			res.status(400).json({ message: 'mongoDB error' });
		} finally {
			await client.close();
		}
	} else {
		res.status(400).json({ message: 'feedback must not be null' });
	}
}
