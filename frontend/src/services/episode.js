import axios from "../axios";

export const apiEpisode = {
  getByThetvdb: (id) =>
    axios
      .get(`/shows/${id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err)),
};
