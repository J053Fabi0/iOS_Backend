import { Router } from "express";
import userRoutes from "./userRoutes";

const router = Router();

// Default response.
router.get("/", (_, res) => res.send().status(200));

router.use(userRoutes);

export default router;
