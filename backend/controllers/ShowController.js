import axios from "axios";

import ShowModel from "../models/Show.js";
import EpisodeModel from "../models/Episode.js";

export const search = async (req, res) => {};

export const createExternal = async (req, res) => {
  try {
    axios
      .get(`https://api.tvmaze.com/search/shows?q=${req.body.name}`)
      .then(async (res) => {
        const resData = res.data;
        const data = resData[0].show;

        const doc = new ShowModel({
          tvmazeId: data.id,
          title: data.name,
          description: data.summary,
          image: data.image,
          genres: data.genres,
          network: data.network.name,
          dateStarted: data.premiered,
          dateEnded: data.ended,
          averageRuntime: data.averageRuntime,
          imdbId: data.externals.imdb,
          thetvdb: data.externals.thetvdb,
          status: data.status,
          country: data.network.country.name,
          episodes: [],
        });

        const show = await doc.save();

        const ids = await axios
          .post(`http://localhost:4444/api/shows/${show._id}/episodes/tvmaze`)
          .then((res) => res.data)
          .catch((err) => console.log(err.data));

        await ShowModel.updateOne({ _id: show._id }, { $addToSet: { episodes: { $each: ids } } });
      })
      .catch((err) => {
        console.log(err);
      });

    res.json({
      message: "Show & episodes successfully added",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Could not add a show",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const showId = req.params.id;

    ShowModel.findByIdAndDelete(showId)
      .then((doc) => {
        if (!doc) {
          return res.status(404).json({
            message: "Show not found",
          });
        }

        res.json({
          message: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json({
          message: "Could not delete a show",
        });
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Could not delete a show",
    });
  }
};

export const update = async (req, res) => {};

export const getById = async (req, res) => {
  try {
    const showId = req.params.id;

    ShowModel.findById(showId)
      .populate("episodes", { show: 0 })
      .exec()
      .then((doc) => {
        if (!doc) {
          return res.status(404).json({
            message: "Show not found",
          });
        }

        res.json(doc);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json({
          message: "Could not retrieve a show",
        });
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Could not retrieve a show",
    });
  }
};

export const getByImdb = async (req, res) => {};

export const getByTvmaze = async (req, res) => {};

export const getEpisodes = async (req, res) => {
  try {
    const episodes = await EpisodeModel.find({ show: req.params.id }).exec();

    if (episodes.length === 0) {
      return res.status(404).json({
        messages: "Episodes not found",
      });
    }

    res.json({ episodes });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Could not retrieve episodes",
    });
  }
};

export const getEpisodesCount = async (req, res) => {
  try {
    const episodes = await EpisodeModel.find({ show: req.params.id }).exec();

    if (episodes.length === 0) {
      return res.status(404).json({
        count: "0",
      });
    }

    res.json({
      count: episodes.length,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Could not retrieve episodes",
    });
  }
};

export const getAllShows = async (req, res) => {
  try {
    const shows = await ShowModel.find().populate("episodes").exec();

    if (shows.length === 0) {
      return res.status(404).json({
        message: "Shows not found",
      });
    }

    res.json(shows);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Could not retrieve shows",
    });
  }
};

export const getAllShowsCount = async (req, res) => {
  try {
    const shows = await ShowModel.find().exec();

    if (shows.length === 0) {
      return res.status(404).json({
        count: "0",
      });
    }

    res.json({
      count: shows.length,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Could not retrieve shows",
    });
  }
};
