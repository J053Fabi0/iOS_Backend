import { join } from "path";
import * as dotenv from "dotenv";
dotenv.config();
dotenv.config({ path: join(__dirname, "..", "/.env") });

import connectServer from "./data/server";
connectServer();

import cors from "cors";
import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

import router from "./routes/routes";
app.use(router);

import { address } from "ip";
const port = parseInt(process.env.PORT || "3025");
app
  .listen(port, () => process.env.NODE_ENV === "test" || console.log(`Server on http://${address()}:${port}`))
  .on("error", (err: any) => process.env.NODE_ENV || console.log(err));

export default app;

//////////////////////////////////////////////////////////////
//////////////////// Save database on exit ///////////////////
//////////////////////////////////////////////////////////////
import customDeath from "./utils/customDeath";

customDeath(() => {
  console.log("Server closed.");
  process.exit(0);
});
