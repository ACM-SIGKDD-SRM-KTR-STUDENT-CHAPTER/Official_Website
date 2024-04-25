require('dotenv').config();

const { MongoClient } = require('mongodb');

// Connection URL and database name
const url = process.env.MONGODB_URI;
const dbName = 'OfficialWebsite';

// Create a new MongoClient
const client = new MongoClient(url);

async function connect() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB');

    // Specify the database and collection
    const db = client.db(dbName);
    const collection = db.collection('OfficialWebsite');

    // Perform database operations
    // ...

  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
}

// Call the connect function
connect();