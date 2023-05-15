import axios from "../axios";

export const apiAuth = {
  getMe: () =>
    axios
      .get("/auth/me")
      .then((res) => res.data)
      .catch((err) => console.log(err)),
  register: (data) => axios.post("/auth/register", data),
  login: (data) => axios.post("/auth/login", data),
  logout: () => axios.post("/auth/logout").catch((err) => console.log(err)),
};
