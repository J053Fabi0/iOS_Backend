import { Router } from "express";
import { auth } from "../middlewares/authJWT";
import * as s from "../schemas/storiesSchemas";
import * as c from "../controllers/storiesControllers";

const storiesRoutes = Router();

storiesRoutes.get("/feed", auth, s.getStories, c.getStories);

export default storiesRoutes;
