import { MongoClient } from 'mongodb';

let mongoClient: MongoClient;

const connectToMongo = async () => {
  mongoClient = new MongoClient(process.env.MONGO_URI_LOCAL);
  await mongoClient.connect();
  return mongoClient.db("teste");
};

const closeMongoConnection = async () => {
  await mongoClient.close();
};

export { connectToMongo, closeMongoConnection };
