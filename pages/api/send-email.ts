import type { NextApiRequest, NextApiResponse } from 'next';

// @ts-ignore
import NextCors from 'nextjs-cors';

/*types*/
import { mailing } from '../../lib/constants/data-types';

const SparkPost = require('sparkpost');

const options = {
	endpoint: 'https://api.eu.sparkpost.com',
};

const client = new SparkPost(process.env.NEXT_PUBLIC_SPARKPOST, options);

const emailContent: mailing = {
	phone: null,
	subject: null,
	email: null,
	name: null,
	message: null,
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

	if (req.body) {
		for (const key in req.body) {
			emailContent[key as keyof mailing] = req.body[key as keyof mailing];
		}
	} else {
		return res.status(400).json({ message: 'data error' });
	}
	if (emailContent.message === null) {
		return res.status(400).json({ message: 'data error' });
	}

	const contact = `${emailContent.phone} ${emailContent.email}`;

	client.transmissions
		.send({
			options: {},
			content: {
				from: 'example@realworldwebportfolio.co.uk',
				subject: emailContent.subject,
				html: `<html><body><p>Name:${emailContent.name}</p><p>Contact:${contact}</p><p>Body:${emailContent.message}</p></body></html>`,
			},
			recipients: [{ address: 'paulrooney60@gmail.com' }],
		})
		.then(() => {
			return res.status(200).json({ message: 'Success' });
		})
		.catch((err: any) => {
			console.error(err);
			return res.status(500).json({ message: 'Sparkpost error' });
		});
}
