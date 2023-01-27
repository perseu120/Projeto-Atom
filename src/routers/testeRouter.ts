import { controlerTest } from "@/controllers/enrollments-controller";
import { Router } from "express";

const testeRouter = Router();

testeRouter
  .get("/", controlerTest)
  
export { testeRouter };
