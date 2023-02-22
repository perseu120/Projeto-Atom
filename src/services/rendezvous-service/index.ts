import { SolicitationType } from "@/protocols";
import rendezvousRepository from "@/repositories/rendezvous-repository/index";

async function getRendezvous() {
  return await rendezvousRepository.getRendezvous();
}

async function postRendezvous(solicitation: SolicitationType) {
  const isCreated = await rendezvousRepository.createServiceSolicitation(solicitation);
  return isCreated;
}

const rendezvousService = {
  getRendezvous,
  postRendezvous
};
  
export default rendezvousService;
// http://localhost:4000/rendezvous
