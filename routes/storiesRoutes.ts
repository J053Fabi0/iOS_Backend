import { Router } from "express";
import { auth } from "../middlewares/authJWT";
import * as s from "../schemas/storiesSchemas";
import * as c from "../controllers/storiesControllers";

const storiesRoutes = Router();

storiesRoutes.get("/story", auth, s.getStory, c.getStory);
storiesRoutes.get("/feed", auth, s.getStories, c.getStories);
storiesRoutes.get("/search", auth, s.getSearchStories, c.getSearchStories);

export default storiesRoutes;
