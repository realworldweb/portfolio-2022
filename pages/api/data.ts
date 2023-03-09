import type { NextApiRequest, NextApiResponse } from 'next';

import axios from 'axios';

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

const data = {
	email: '',
	name: '',
	message: 'Approve feedback',
	subject: 'Approve feedback',
	phone: '',
};

const axiosConfig = {
	headers: {
		'Content-Type': 'application/json;charset=UTF-8',
		'Access-Control-Allow-Origin': '*',
	},
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
	const url = req.headers.host?.includes('localhost')
		? `http://${req.headers.host}`
		: `https://${req.headers.host}`;
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
				await axios
					.post(`${url}/api/send-email`, data, axiosConfig)
					.catch((e) => console.log(e));

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
