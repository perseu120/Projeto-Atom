import { getRendezvous, postRendezvous } from "@/controllers/rendezvous-controller";
import { Router } from "express";

const rendezvousRouter = Router();

rendezvousRouter
  .get("/", getRendezvous)
  .post("/", postRendezvous);
  
export { rendezvousRouter };
