import { Router } from "express";
import checkAuth from "../utils/checkAuth.js";
import * as UserController from "../controllers/UserController.js";
import * as AuthController from "../controllers/AuthController.js";
import User from "../models/User.js";

const router = Router();

// Auth
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/logout", checkAuth, AuthController.logout);
router.get("/me", checkAuth, AuthController.getMe);

// User
router.get("/", UserController.getAllUsers);
router.get("/:id");
router.patch("/:id");
router.delete("/:id");

//Feed
router.get("/:id/feed");
router.get("/:id/friendsFeed");

// Watched
router.get("/:id/shows");
router.post("/:id/shows");
router.get("/:id/shows/:showId/episodes");
router.get("/:id/episodes");
router.post("/:id/episodes");

// Comments
router.get("/:id/comments");
router.patch("/:id/comments/:commentId");
router.delete("/:id/comments/:commentId");

// Following
router.get("/:id/following");
router.post("/:id/following");
router.delete("/:id/following/:followingId");

// Lists
router.get("/:id/lists");
router.post("/:id/lists");
router.patch("/:id/lists/:listId");
router.delete("/:id/lists/:listId");
router.post("/:id/lists/:listId/addEpisode");
router.delete("/:id/lists/:listId/removeEpisode");
router.post("/:id/lists/:listId/addShow");
router.delete("/:id/lists/:listId/removeShow");

// Diary
router.get("/:id/diary");
router.post("/:id/diary");
router.patch("/:id/diary/:entryId");
router.delete("/:id/diary/:entryId");

// Favorite
router.get("/:id/favorite/shows");
router.get("/:id/favorite/episodes");

//Manage
router.get("/shows/status", checkAuth, UserController.getShowStatuses);
router.patch("/shows/:showId/status", checkAuth, UserController.changeShowStatus);
router.delete("/shows/:showId/remove", checkAuth, UserController.removeShowFromWatched);
router.patch("/shows/:showId/rate", checkAuth, UserController.rateShow);
router.patch("/episodes/:episodeId/rate", checkAuth, UserController.rateEpisode);
router.patch("/episodes/:episodeId/check", checkAuth, UserController.checkEpisode);
router.patch("/episodes/:episodeId/uncheck", checkAuth, UserController.uncheckEpisode);
router.patch("/shows/:showId/episodes/check", checkAuth, UserController.checkSeason);
router.patch("/shows/:showId/episodes/uncheck", checkAuth);

export default router;
