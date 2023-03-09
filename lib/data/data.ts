import { fields } from '../constants/data-types';

const { MongoClient } = require('mongodb');

const url = process.env.MONGOSERVER; //authenticate

const client = new MongoClient(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const getData = async (get: string, fields?: fields) => {
	try {
		await client.connect();

		const mount = async () => {
			// load certs and pass it to express route for processing.
			return await client
				.db('portfolio2022')
				.collection(get)
				.find(fields ? { ...fields } : {}, { projection: { _id: 0 } })
				.toArray();
		};

		return await mount();
	} catch (e) {
		console.error(e);
	} finally {
		await client.close();
	}
};

export { getData };
