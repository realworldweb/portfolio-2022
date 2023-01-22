
const { MongoClient } = require('mongodb');

const url = process.env.mongoServer; //authenticate

let data : any;


const getData = async (get: string) => {
	const client = new MongoClient(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	try {
		await client.connect();

        const mount = async () => {// load certs and pass it to express route for processing.
            console.log('ran')
              data = await client.db('portfolio').collection(get)  
            }
       await mount();
    
       return data;
	
	} catch (e) {
		console.error(e);
	}
}
	
export {
    getData
}
