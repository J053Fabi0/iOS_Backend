import { Router } from "express";
import { auth } from "../middlewares/authJWT";
import * as s from "../schemas/storiesSchemas";
import * as c from "../controllers/storiesControllers";

const storiesRoutes = Router();

storiesRoutes.get("/feed", auth, s.getStories, c.getStories);
storiesRoutes.get("/stories/search", auth, s.getSearchStories, c.getSearchStories);

export default storiesRoutes;
