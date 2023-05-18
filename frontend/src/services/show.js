import axios from "../axios";

export const apiShow = {
  getByThetvdb: (id) =>
    axios
      .get(`/shows/${id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err)),

  getEpisodeByNum: (id, num) =>
    axios
      .get(`/shows/${id}/episodes/${num}`)
      .then((res) => res.data)
      .catch((err) => console.log(err)),
  getObjIdByThetvdb: (id) =>
    axios
      .get(`/shows/${id}/toObjectID`)
      .then((res) => res.data)
      .catch((err) => console.log(err)),
  getAllShows: () =>
    axios
      .get("/shows")
      .then((res) => res.data)
      .catch((err) => console.log(err)),
};
