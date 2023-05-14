import { ObjectId } from "mongoose";
import UserModel from "../models/User.js";
import EpisodeModel from "../models/Episode.js";
import CommentModel from "../models/Comment.js";

export const follow = async (req, res) => {};

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();

    if (users.length == 0) {
      return res.status(404).json({ message: "No users found" });
    }

    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Could not get all users",
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id).exec();

    if (!user) {
      return res.status(404).json({
        messages: "User not found",
      });
    }

    const { passwordHash, ...userData } = user._doc;
    res.json({ ...userData });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Could not get user by ID",
    });
  }
};

export const getUserIdByUsername = async (req, res) => {
  try {
    const user = await UserModel.find({ username: req.params.username }).exec();

    if (!user) {
      return res.status(404).json({
        messages: "User not found",
      });
    }

    res.json({
      id: user[0]._id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Could not get user ID by username",
    });
  }
};

export const getFollowers = async (req, res) => {};

export const getFollowersFeed = async (req, res) => {};

export const getUserComments = async (req, res) => {};

export const getUserLists = async (req, res) => {};

export const getUserShows = async (req, res) => {};

export const getUserEpisodes = async (req, res) => {};

export const getUserShowEpisodes = async (req, res) => {};

export const getShowStatuses = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id, {
      "watchedShows._id": 0,
      "watchedShows.rating": 0,
      "watchedShows.isFavorite": 0,
    }).exec();

    if (!user) {
      return res.status(404).json({
        messages: "User not found",
      });
    }

    res.json(user.watchedShows);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Could not get show statuses",
    });
  }
};

export const changeShowStatus = async (req, res) => {
  try {
    const user = await UserModel.findOneAndUpdate(
      { _id: req.userId, "watchedShows.show": req.params.showId },
      {
        $set: {
          "watchedShows.$.watchStatus": req.body.status,
        },
      },
      { upsert: true, new: true }
    ).catch(async (err) => {
      await UserModel.findByIdAndUpdate(
        req.userId,
        {
          $push: {
            watchedShows: {
              show: req.params.showId,
              watchStatus: req.body.status,
            },
          },
        },
        { upsert: true, new: true }
      )
        .then((doc) => {
          if (!doc) {
            return res.status(404).json({
              message: "User not found",
            });
          }
        })
        .catch((err) => console.log(err));
    });

    return res.json({ message: `Show status successfully changed to ${req.body.status}` });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Could not change show status",
    });
  }
};

export const removeShowFromWatched = async (req, res) => {
  try {
    const user = await UserModel.findOne({ _id: req.userId, "watchedShows.show": req.params.showId });
    console.log(user._doc);

    const showIndex = user.watchedShows.findIndex((show) => show.show.toString() === req.params.showId);
    console.log(showIndex);

    await UserModel.findOneAndUpdate(
      { _id: req.userId, "watchedShows.show": req.params.showId },
      { $pull: { watchedShows: { show: req.params.showId } } }
    ).then((doc) => {
      if (!doc) {
        return res.status(404).json({
          message: "Show not found",
        });
      }

      res.json({
        message: "Show successfully removed from watched",
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Could not remove show from watched",
    });
  }
};

export const rateShow = async (req, res) => {
  try {
    const user = await UserModel.findOneAndUpdate(
      { _id: req.userId, "watchedShows.show": req.params.showId },
      {
        $set: {
          "watchedShows.$.rating": req.body.rating,
        },
      },
      { upsert: true, new: true }
    )
      .then((doc) => {
        if (!doc) {
          return res.status(404).json({
            message: "Show not found",
          });
        }

        res.json({ message: `Changed show rating to ${req.body.rating}` });
      })
      .catch((err) => {
        return res.status(404).json({
          message: `Show not found`,
        });
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Could not rate show",
    });
  }
};

export const rateEpisode = async (req, res) => {
  try {
    const user = await UserModel.findOneAndUpdate(
      { _id: req.userId, "watchedEpisodes.episode": req.params.episodeId },
      {
        $set: {
          "watchedEpisodes.$.episode": req.params.episodeId,
          "watchedEpisodes.$.rating": req.body.rating,
        },
      },
      { upsert: true, new: true }
    ).catch(async (err) => {
      await UserModel.findByIdAndUpdate(
        req.userId,
        {
          $push: {
            watchedEpisodes: {
              episode: req.params.episodeId,
              rating: req.body.rating,
            },
          },
        },
        { upsert: true, new: true }
      )
        .then((doc) => {
          if (!doc) {
            return res.status(404).json({
              message: "User not found",
            });
          }
        })
        .catch((err) => console.log(err));
    });

    res.json({ message: `Changed episode rating to ${req.body.rating}` });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Could not rate show",
    });
  }
};

export const checkEpisode = async (req, res) => {
  try {
    // Проверить есть ли сериал
    const episode = await EpisodeModel.findOne({ _id: req.params.episodeId });
    const userShow = await UserModel.findOne({ _id: req.userId, "watchedShows.show": episode.show });
    if (!userShow) {
      console.log("Сериал не отмечен, надо добавить в смотрю");
      await UserModel.findByIdAndUpdate(
        req.userId,
        {
          $push: {
            watchedShows: {
              show: episode.show,
              watchStatus: "Watching",
            },
          },
        },
        { upsert: true, new: true }
      )
        .then((doc) => {
          if (!doc) {
            return res.status(404).json({
              message: "User not found",
            });
          }
        })
        .catch((err) => console.log(err));
    }

    const user = await UserModel.findOneAndUpdate(
      { _id: req.userId, "watchedEpisodes.episode": { $ne: req.params.episodeId } },
      {
        $push: {
          watchedEpisodes: {
            episode: req.params.episodeId,
          },
        },
      },
      { upsert: true, new: true }
    )
      .then((doc) => {
        if (!doc) {
          return res.status(404).json({
            message: "User not found",
          });
        }

        res.json({
          message: "Checked episode as watched",
        });
      })
      .catch((err) => {
        return res.status(500).json({
          message: "Could not check an episode",
        });
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Could not check an episode",
    });
  }
};

export const uncheckEpisode = async (req, res) => {
  try {
    console.log(req.params.episodeId);
    await UserModel.findOneAndUpdate(
      { _id: req.userId, "watchedEpisodes.episode": req.params.episodeId },
      { $pull: { watchedEpisodes: { episode: req.params.episodeId } } }
    )
      .then((doc) => {
        if (!doc) {
          return res.status(404).json({
            message: "Episode not found",
          });
        }

        res.json({ message: "Episode successfully removed from watched" });
      })
      .catch((err) => {
        console.log(err);
        return res.status(404).json({
          message: "Could not remove episode from watched",
        });
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Could not remove episode from watched",
    });
  }
};

export const checkSeason = async (req, res) => {};

export const uncheckSeason = async (req, res) => {};

export const favoriteShow = async (req, res) => {};

export const favoriteEpisode = async (req, res) => {};
