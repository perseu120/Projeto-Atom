import express from "express";
import cors from "cors";

import { loadEnv } from "@/config";

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  

export default app;
