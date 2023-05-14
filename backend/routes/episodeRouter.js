import { Router } from "express";
import * as EpisodeController from "../controllers/EpisodeController.js";

const router = Router();

//* Episodes

// http://localhost:4444/api/episodes
router.get("/", EpisodeController.getAllEpisodes);

// http://localhost:4444/api/episodes/count
router.get("/count", EpisodeController.getAllEpisodesCount);

// http://localhost:4444/api/episodes/:episodeId/comments
router.get("/:episodeId/comments");
router.post("/:episodeId/comments");

// http://localhost:4444/api/episodes/:episodeId/comments/count
router.get("/:episodeId/comments/count");

export default router;
