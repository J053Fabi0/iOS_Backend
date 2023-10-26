import { Router } from "express";
import userRoutes from "./usersRoutes";
import storiesRoutes from "./storiesRoutes";

const router = Router();

// Default response.
router.get("/", (_, res) => res.send().status(200));

router.use(userRoutes);
router.use(storiesRoutes);

export default router;
