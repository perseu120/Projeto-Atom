import express from "express";
import cors from "cors";

import { loadEnv } from "@/config";
import { rendezvousRouter } from "./routers/rendezvousRouter";

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .use("/rendezvous", rendezvousRouter);

export default app;
