import axios from "axios";

import ShowModel from "../models/Show.js";
import EpisodeModel from "../models/Episode.js";

export const search = async (req, res) => {};

export const create = async (req, res) => {};

export const createExternal = async (req, res) => {
  try {
    const showId = req.params.id;
    const show = await ShowModel.findById(req.params.id);
    const episodesId = [];

    if (!show) {
      return res.status(404).json({
        message: "Show not found",
      });
    }

    await axios
      .get(`https://api.tvmaze.com/shows/${show.tvmazeId}/episodes`)
      .then(async (res) => {
        const data = res.data;

        for (const episode of data) {
          const episodeModel = new EpisodeModel({
            tvmazeId: episode.id,
            season: episode.season,
            number: episode.number,
            name: episode.name,
            runtime: episode.runtime,
            airdate: episode.airdate,
            summary: episode.summary,
            image: episode.image,
            type: episode.type,
            show: showId,
          });

          const ep = await episodeModel.save();
          episodesId.push(ep._id);
        }
      })
      .catch((err) => {
        console.log("Error while getting episodes from TVMaze", err);
      });

    res.json(episodesId);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Could not add episodes",
    });
  }
};

export const remove = async (req, res) => {};

export const update = async (req, res) => {};

export const getEpisodeById = async (req, res) => {};

export const getEpisodeByTvmaze = async (req, res) => {};

export const createComment = async (req, res) => {};

export const deleteComment = async (req, res) => {};

export const getEpisodeComments = async (req, res) => {};

export const getAllEpisodes = async (req, res) => {
  try {
    const episodes = await EpisodeModel.find().exec();

    if (episodes.length === 0) {
      return res.status(404).json({
        messages: "Episodes not found",
      });
    }

    res.json(episodes);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Could not retrieve episodes",
    });
  }
};

export const getAllEpisodesCount = async (req, res) => {
  try {
    const episodes = await EpisodeModel.find().exec();

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
