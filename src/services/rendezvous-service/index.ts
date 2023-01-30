import { SolicitationType } from "@/protocols";
import rendezvousRepository from "@/repositories/rendezvous-repository/index"

function getRendezvous(){

  return rendezvousRepository.getRendezvous();
}

function postRendezvous(solicitation: SolicitationType){
  
  const isCreated = rendezvousRepository.createServiceSolicitation(solicitation);

  return isCreated;
}

const rendezvousService = {
  getRendezvous,
  postRendezvous
};
  
export default rendezvousService;
// http://localhost:4000/rendezvous