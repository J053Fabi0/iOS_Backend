import { Router } from "express";
import * as s from "../schemas/userSchema";
import * as c from "../controllers/userController";

const userRoutes = Router();

userRoutes.post("/user", s.postUser, c.postUser);

export default userRoutes;
