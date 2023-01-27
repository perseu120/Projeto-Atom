import { MongoClient } from 'mongodb';

const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
    mongoClient.connect();
    console.log("Conexão com o banco de dados estabelecida");
} catch (error) {
    console.log("erro ao conectar com o banco");
}

export default mongoClient;
