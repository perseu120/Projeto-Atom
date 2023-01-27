import express from "express";
import cors from "cors";

import { loadEnv } from "@/config";
import { testeRouter } from "@/routers/testeRouter";

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .use("/test", testeRouter);
  

export default app;
