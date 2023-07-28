



/*Connection to MongoDB*/
const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'MyDatabase';
async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('student');
  
const insertDocuments = 
   await collection.insertMany([{ name: 'John', age: 20 },
                                 { name: 'Billy', age: 25 }, 
                                { name: 'Elena', age: 23 }]);
console.log('Inserted documents =>', insertDocuments);
 const updateDocument = await collection.updateOne({ name: 'John' },
                                                  { $set: { age: 22 } });
  console.log('Updated document =>', updateDocument);
  return 'done.';
  
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

/*Inserting document in Node.js*/

