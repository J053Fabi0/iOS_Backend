import { Request } from "express";
import { User } from "./models/user.type";

export default interface CommonRequest<Body = any, Query = any> extends Request<{}, any, Body, Query> {
  // here you can extend the Request interface
  authPerson?: User;
}
