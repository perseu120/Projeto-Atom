import { connectToMongo, closeMongoConnection } from "@/config/database";
import { SolicitationType } from "@/protocols";

async function getRendezvous(){

  const db = await connectToMongo();
  const collection = db.collection('schedule').find({}).toArray();
  closeMongoConnection();
  return collection;
}
async function createServiceSolicitation(solicitation: SolicitationType) {
    
}

const rendezvousRepository = {
    getRendezvous,
    createServiceSolicitation
};
  
export default rendezvousRepository;
