import { Router } from "express";
import * as ShowController from "../controllers/ShowController.js";
import * as EpisodeController from "../controllers/EpisodeController.js";

const router = Router();

// #region Show

// http://localhost:4444/api/shows/ - Получить все сериалы из ДБ с эпизодами
router.get("/", ShowController.getAllShows);
router.post("/");

// http://localhost:4444/api/shows/tvmaze - Добавить сериал и эпизоды в ДБ из TVMaze
router.post("/tvmaze", ShowController.createExternal);

// http://localhost:4444/api/shows/count - Получить количество сериалов в ДБ
router.get("/count", ShowController.getAllShowsCount);

// http://localhost:4444/api/shows/:imdbId - Получить сериал по imdb ID
router.get("/:imdbId");

// http://localhost:4444/api/shows/:id - Сериал по ObjectId 
router.get("/:id", ShowController.getById);
router.patch("/:id");
router.delete("/:id");

// #endregion

// #region Seasons

// http://localhost:4444/api/shows/:id/seasons - Получить количество сезонов
router.get("/:id/seasons");

// http://localhost:4444/api/shows/:id/seasons/:number - Получить серии в сезоне 
router.get("/:id/seasons/:number");

// #endregion

// #region Episodes

// http://localhost:4444/api/shows/:id/episodes - Серии в сериале
router.get("/:id/episodes", ShowController.getEpisodes);
router.post("/:id/episodes");

router.get("/:id/episodes/count", ShowController.getEpisodesCount);

// http://localhost:4444/api/shows/tvmaze - Добавить эпизоды в ДБ из TVMaze (DEV only)
router.post("/:id/episodes/tvmaze", EpisodeController.createExternal);

// http://localhost:4444/api/shows/:id/episodes/:episodeNum
router.get("/:id/seasons/:number/episode/:episodeNum");
router.patch("/:id/seasons/:number/episode/:episodeNum");
router.delete("/:id/seasons/:number/episode/:episodeNum");

// #endregion

export default router;
