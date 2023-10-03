import { join } from "path";
import * as dotenv from "dotenv";
dotenv.config();
dotenv.config({ path: join(__dirname, "..", "/.env") });

import cors from "cors";
import express from "express";
import { usingCors } from "./utils/constants";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const whitelist = ["https://emergencias.josefabio.com"];
app.use(
  usingCors
    ? cors({
        origin: function (origin, callback) {
          if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
          } else {
            callback(new Error("Not allowed by CORS"));
          }
        },
      })
    : cors()
);

import router from "./routes/routes";
app.use(router);

import { address } from "ip";
const port = 3025;
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