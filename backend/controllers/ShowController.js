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

export const update = async (req, res) => {
  try {
    const showId = req.params.id;

    ShowModel.findByIdAndUpdate(showId, {
      title: req.body.title,
      description: req.body.description,
      genres: req.body.genres,
      network: req.body.network,
      dateStarted: req.body.dateStarted,
      dateEnded: req.body.dateEnded,
      averageRuntime: req.body.averageRuntime,
      imdbId: req.body.imdbId,
      thetvdb: req.body.thetvdb,
      status: req.body.status,
      country: req.body.country,
      image: req.body.image,
    })
      .then(() => {
        res.json({
          message: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: "Could not update a show",
        });
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Could not update a show",
    });
  }
};

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

export const getByTvdb = async (req, res) => {
  try {
    const showId = req.params.id;

    ShowModel.findOne({ thetvdb: showId })
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

export const getIdByThetvdb = async (req, res) => {
  try {
    const tvdb = req.params.id;

    ShowModel.findOne({ thetvdb: tvdb }, { _id: 1 })
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

export const getEpisodes = async (req, res) => {
  try {
    const episodes = await EpisodeModel.find({ show: req.params.id }).exec();

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

export const getEpisodeByNumber = async (req, res) => {
  try {
    const showId = req.params.id;
    const episodeNum = req.params.episodeNum.split("x");

    switch (episodeNum[1]) {
      case "01":
        episodeNum[1] = 1;
        break;
      case "02":
        episodeNum[1] = 2;
        break;
      case "03":
        episodeNum[1] = 3;
        break;
      case "04":
        episodeNum[1] = 4;
        break;
      case "05":
        episodeNum[1] = 5;
        break;
      case "06":
        episodeNum[1] = 6;
        break;
      case "07":
        episodeNum[1] = 7;
        break;
      case "08":
        episodeNum[1] = 8;
        break;
      case "09":
        episodeNum[1] = 9;
        break;
    }

    EpisodeModel.findOne({ show: showId, season: episodeNum[0], number: episodeNum[1] })
      .populate({ path: "show", select: "thetvdb title" })
      .exec()
      .then((doc) => {
        if (!doc) {
          return res.status(404).json({
            message: "Episode not found",
          });
        }

        res.json(doc);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json({
          message: "Could not retrieve an episode",
        });
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Could not retrieve an episode",
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

export const getSeasons = async (req, res) => {
  try {
    const episodes = await EpisodeModel.find({ show: req.params.id }).exec();

    let seasons = [];

    episodes.forEach((episode) => {
      const found = seasons.some((el) => el.season === episode.season);
      if (!found) {
        seasons.push({ season: episode.season, episodes: [episode] });
      } else {
        const index = seasons.findIndex((el) => el.season === episode.season);
        seasons[index].episodes.push(episode);
      }
    });

    res.json(seasons);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Could not retrieve seasons",
    });
  }
};

export const getSeasonsCount = async (req, res) => {
  try {
    const episode = await EpisodeModel.findOne({ show: req.params.id }).sort({ createdAt: -1 }).exec();

    if (!episode) {
      return res.status(404).json({
        count: "0",
      });
    }

    res.json({
      count: episode.season,
    });
  } catch (err) {
    res.status(500).json({
      message: "Could not retrieve seasons count",
    });
  }
};

export const getSeasonEpisodes = async (req, res) => {
  try {
    const episodes = await EpisodeModel.find({ show: req.params.id, season: req.params.number }).exec();

    if (episodes.length === 0) {
      return res.status(404).json({
        message: `Season ${req.params.number} episodes not found`,
      });
    }

    res.json(episodes);
  } catch (err) {
    res.status(500).json({
      message: "Could not retrieve season episodes",
    });
  }
};

export const getSeasonEpisode = async (req, res) => {
  try {
    const episode = await EpisodeModel.findOne({
      show: req.params.id,
      season: req.params.number,
      number: req.params.episodeNum,
    }).exec();

    if (!episode) {
      return res.status(404).json({
        message: `Season ${req.params.number} episode ${req.params.episodeNum} not found`,
      });
    }

    res.json(episode);
  } catch (err) {
    res.status(500).json({
      message: "Could not retrieve season episodes",
    });
  }
};

export const updateSeasonEpisode = async (req, res) => {
  try {
    EpisodeModel.findOneAndUpdate(
      {
        show: req.params.id,
        season: req.params.number,
        number: req.params.episodeNum,
      },
      {
        tvmazeId: req.body.tvmazeId,
        name: req.body.name,
        runtime: req.body.runtime,
        airdate: req.body.airdate,
        summary: req.body.summary,
        type: req.body.type,
        image: req.body.image,
      }
    )
      .then(() => {
        res.json({
          message: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: "Could not update an episode",
        });
      });
  } catch (err) {
    res.status(500).json({
      message: "Could not retrieve season episodes",
    });
  }
};

export const getAllShows = async (req, res) => {
  try {
    const shows = await ShowModel.find().exec();
    // const shows = await ShowModel.find().populate("episodes").exec();

    if (shows.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "Shows not found",
      });
    }

    res.json({ status: "success", data: shows });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
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
