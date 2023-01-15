
const { MongoClient } = require('mongodb');

const url = process.env.MONGOSERVER; //authenticate

const getData = async (get: string) => {
  
	const client = new MongoClient(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	try {
		await client.connect();

        const mount = async () => {// load certs and pass it to express route for processing.
              return await client.db('portfolio2022').collection(get).find({}, {projection:{_id:0}}).toArray()
            }
       
    
       return await mount();
	
	} catch (e) {
		console.error(e);
	}
}
	
export {
    getData
}
