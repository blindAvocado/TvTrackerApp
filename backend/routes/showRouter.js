import { Router } from "express";
import * as ShowController from "../controllers/ShowController.js";
import * as EpisodeController from "../controllers/EpisodeController.js";

const router = Router();

// Show

// http://localhost:4444/api/shows/tvmaze - Добавить сериал и эпизоды в ДБ из TVMaze
router.post("/tvmaze", ShowController.createExternal);

router.get("/", ShowController.getAllShows);
router.get("/count", ShowController.getAllShowsCount);
router.get("/:imdbId");
router.get("/:id", ShowController.getById);
router.patch("/:id", ShowController.update);
router.delete("/:id");

// Seasons
router.get("/:id/seasons", ShowController.getSeasons);
router.get("/:id/seasons/count", ShowController.getSeasonsCount);
router.get("/:id/seasons/:number", ShowController.getSeasonEpisodes);

// Episodes
router.get("/:id/episodes", ShowController.getEpisodes);
router.get("/:id/episodes/count", ShowController.getEpisodesCount);

// http://localhost:4444/api/shows/tvmaze - Добавить эпизоды в ДБ из TVMaze (DEV only)
router.post("/:id/episodes/tvmaze", EpisodeController.createExternal);

// http://localhost:4444/api/shows/:id/episodes/:episodeNum
router.get("/:id/seasons/:number/episodes/:episodeNum", ShowController.getSeasonEpisode);
router.patch("/:id/seasons/:number/episodes/:episodeNum", ShowController.updateSeasonEpisode);
router.delete("/:id/seasons/:number/episodes/:episodeNum");

export default router;
