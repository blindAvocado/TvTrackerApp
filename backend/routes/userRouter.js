import { Router } from "express";
import checkAuth from "../middleware/checkAuth.js";
import checkAdmin from "../middleware/checkAdmin.js";
import checkUser from "../middleware/checkUser.js";
import * as UserController from "../controllers/UserController.js";
import * as AuthController from "../controllers/AuthController.js";
import User from "../models/User.js";

const router = Router();

// User
router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUser);
router.patch("/:id");
router.delete("/:id");

//Feed
router.get("/:id/feed");
router.get("/:id/followingFeed",);

// Watched
router.get("/:id/shows", UserController.getUserShows);
router.get("/:id/shows/count");
router.get("/:id/shows/:showId/episodes", UserController.getUserShowEpisodes);
router.get("/:id/shows/:showId/episodes/count");
router.get("/:id/episodes", UserController.getUserEpisodes);
router.get("/:id/episodes/count");

// Comments
router.get("/:id/comments");
router.delete("/:id/comments/:commentId", checkAdmin);

// Following
router.get("/:id/following");
router.delete("/:id/following/:followingId", checkAuth);

// Lists
router.get("/:id/lists");
router.post("/:id/lists", checkAuth);
router.get("/:id/lists/:listId");
router.patch("/:id/lists/:listId", checkAuth);
router.delete("/:id/lists/:listId", checkAuth);
router.post("/:id/lists/:listId/addEpisode", checkAuth);
router.delete("/:id/lists/:listId/removeEpisode", checkAuth);
router.post("/:id/lists/:listId/addShow", checkAuth);
router.delete("/:id/lists/:listId/removeShow", checkAuth);

// Diary
router.get("/:id/diary");
router.patch("/:id/diary/:entryId", checkAuth);

// Favorite
router.get("/:id/favorite/shows");
router.delete("/:id/favorite/shows/:showId", checkAuth);
router.get("/:id/favorite/episodes");
router.delete("/:id/favorite/episodes/:episodeId", checkAuth);

router.get("/:id/wasted");

//Manage
router.get("/:id/follow", checkAuth, UserController.follow);
router.get("/:id/shows/status", UserController.getShowStatuses);
router.patch("/shows/:showId/status", checkAuth, UserController.changeShowStatus);
router.delete("/shows/:showId/remove", checkAuth, UserController.removeShowFromWatched);
router.patch("/shows/:showId/rate", checkAuth, UserController.rateShow);
router.patch("/shows/:showId/favorite", checkAuth, UserController.favoriteShow);
router.patch("/episodes/:episodeId/rate", checkAuth, UserController.rateEpisode);
router.patch("/episodes/:episodeId/check", checkAuth, UserController.checkEpisode);
router.patch("/episodes/:episodeId/uncheck", checkAuth, UserController.uncheckEpisode);
router.patch("/episodes/:episodeId/favorite", checkAuth, UserController.favoriteEpisode);
router.patch("/shows/:showId/episodes/check", checkAuth, UserController.checkSeason);
router.patch("/shows/:showId/episodes/uncheck", checkAuth, UserController.uncheckSeason);

export default router;
