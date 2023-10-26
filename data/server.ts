import { connect } from "mongoose";

export default async function connectServer() {
  await connect(process.env.MONGO_URI || "", {
    dbName: process.env.DB_NAME,
  });
}
