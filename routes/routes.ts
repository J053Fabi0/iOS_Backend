import { Router } from "express";
import notesRoutes from "./notesRoutes";

const router = Router();

// Default response.
router.get("/", (_, res) => res.send().status(200));

router.use(notesRoutes);

export default router;
