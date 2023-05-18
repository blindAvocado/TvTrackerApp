import axios from "../axios";

export const apiUser = {
  // getFavoriteShows: () => axios.get("/auth/me"),
  // getFavoriteEpisodes: (data) => axios.post("/auth/register", data),
  // getWatchedShows: (data) => axios.post("/auth/login", data),
  getWatchedShow: (userId, showId) =>
    axios
      .get(`/users/${userId}/shows/${showId}/data`)
      .then((res) => res.data)
      .catch((err) => console.log(err.response.data)),
  getWatchedEpisodes: (userId, showId) =>
    axios
      .get(`/users/${userId}/shows/${showId}/episodes`)
      .then((res) => res.data)
      .catch((err) => console.log(err.response.data)),
  // getWatchedShowEpisode: () => axios.post("/auth/logout"),
  getUserById: (id) =>
    axios
      .get(`/users/${id.toString()}`)
      .then((res) => res.data)
      .catch((err) => console.log(err.response.data)),
  getIdByUsername: (username) =>
    axios
      .get(`/users/name/${username.toString()}`)
      .then((res) => res.data.id)
      .catch((err) => console.log(err.response.data)),
  getShowStatuses: (id) =>
    axios
      .get(`/users/${id}/shows/status`)
      .then((res) => res.data)
      .catch((err) => console.log(err)),
  // setShowStatus: () => axios.post("/auth/logout"),
  getWastedTime: (id) =>
    axios
      .get(`/users/${id}/wasted`)
      .then((res) => res.data)
      .catch((err) => console.log(err)),
  // removeShowFromWatched: () => axios.post("/auth/logout"),
  rateShow: (showId, data) =>
    axios
      .patch(`/users/shows/${showId}/rate`, data)
      .then((res) => res.data)
      .catch((err) => console.log(err)),
  rateEpisode: (episodeId, data) =>
    axios
      .patch(`/users/episodes/${episodeId}/rate`, data)
      .then((res) => res.data)
      .catch((err) => console.log(err)),
  checkEpisode: (episodeId) =>
    axios
      .patch(`/users/episodes/${episodeId}/check`)
      .then((res) => res.data)
      .catch((err) => console.log(err)),
  uncheckEpisode: (episodeId) =>
    axios
      .patch(`/users/episodes/${episodeId}/uncheck`)
      .then((res) => res.data)
      .catch((err) => console.log(err)),
  // addShowToFav: () => axios.post("/auth/logout"),
  // addEpisodeToFav: () => axios.post("/auth/logout"),
  getFollowers: (id) =>
    axios
      .get(`/users/${id}/following`)
      .then((res) => res.data)
      .catch((err) => console.log(err)),
  followUser: (data) => axios.post("/users/follow", data),
  unfollowUser: (data) => axios.post("/users/unfollow", data),
  setShowStatus: (showId, status) =>
    axios
      .patch(`/users/shows/${showId}/status`, status)
      .then((res) => res.data)
      .catch((err) => console.log(err)),
  removeShowFromWatched: (showId) =>
    axios
      .delete(`/users/shows/${showId}/remove`)
      .then((res) => res.data)
      .catch((err) => console.log(err)),
};
