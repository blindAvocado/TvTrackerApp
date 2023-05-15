import axios from "../axios";

export const apiUser = {
  // getFavoriteShows: () => axios.get("/auth/me"),
  // getFavoriteEpisodes: (data) => axios.post("/auth/register", data),
  // getWatchedShows: (data) => axios.post("/auth/login", data),
  // getWatchedEpisodes: (data) => axios.post("/auth/login", data),
  // getWatchedShowEpisode: () => axios.post("/auth/logout"),
  getUserById: (id) =>
    axios
      .get(`/users/${id.toString()}`)
      .then((res) => res.data)
      .catch((err) => console.log(err)),
  getIdByUsername: (username) =>
    axios
      .get(`/users/name/${username.toString()}`)
      .then((res) => res.data.id)
      .catch((err) => console.log(err)),
  // getShowStatuses: () => axios.post("/auth/logout"),
  // setShowStatus: () => axios.post("/auth/logout"),
  getWastedTime: (id) =>
    axios
      .get(`/users/${id}/wasted`)
      .then((res) => res.data)
      .catch((err) => console.log(err)),
  // removeShowFromWatched: () => axios.post("/auth/logout"),
  // rateShow: () => axios.post("/auth/logout"),
  // rateEpisode: () => axios.post("/auth/logout"),
  // checkEpisode: () => axios.post("/auth/logout"),
  // unccheckEpisode: () => axios.post("/auth/logout"),
  // addShowToFav: () => axios.post("/auth/logout"),
  // addEpisodeToFav: () => axios.post("/auth/logout"),
  // getFollowers: () => axios.post("/auth/logout"),
  // followUser: () => axios.post("/auth/logout"),
  // unfollowUser: () => axios.post("/auth/logout"),
};
