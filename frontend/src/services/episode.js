import axios from "../axios";

export const apiEpisode = {
  getById: (id) =>
    axios
      .get(`/shows/${id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err)),
};
