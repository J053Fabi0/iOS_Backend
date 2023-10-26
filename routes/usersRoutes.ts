import { Router } from "express";
import * as s from "../schemas/usersSchemas";
import * as c from "../controllers/usersControllers";

const userRoutes = Router();

userRoutes.post("/user", s.postUser, c.postUser);

export default userRoutes;
