import { Router } from "express";
import userRouter from "./userRouter.js";
import showRouter from "./showRouter.js";
import episodeRouter from "./episodeRouter.js";

const router = Router();

// http://localhost:4444/api/users
router.use("/users", userRouter);

// http://localhost:4444/api/shows
router.use("/shows", showRouter);

// http://localhost:4444/api/episodes
router.use("/episodes", episodeRouter);

export default router;
