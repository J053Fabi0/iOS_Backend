import { Router } from "express";
import * as s from "../schemas/notesSchema";
import * as c from "../controllers/notesController";

const notesRoutes = Router();

notesRoutes.get("/note", s.getNote, c.getNote);

export default notesRoutes;
