import React, { useState, useEffect } from "react";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom";
import Cookies from "js-cookie";

import { apiAuth } from "./services/auth";

import { Layout, Logout } from "./components";
import { Login, Registration, Profile, Show, Episode, Shows, showLoader, episodeLoader } from "./pages";

import "./App.css";
import { ModalAddShow } from "./components/ModalAddShow";

function App() {
  const [user, setUser] = useState({ isLoggedIn: false });

  useEffect(() => {
    const getUser = async () => {
      if (!user.isLoggedIn && Cookies.get("access_token")) {
        apiAuth
          .getMe()
          .then((res) => {
            console.log(res);
            setUser({ ...res, isLoggedIn: true });
          })
          .catch((err) => console.log(err));
      }
    };

    getUser();

    console.log(`isLoggedIn: ${user.isLoggedIn}`);

  }, [user, setUser]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout user={user} />}>
        <Route path="/" element={<Navigate to="shows" replace />} />
        <Route exact path="login" element={<Login user={user} setUser={setUser} />} />
        <Route exact path="register" element={<Registration user={user} setUser={setUser} />} />
        <Route exact path="logout" forceRefresh={true} element={<Logout />} />
        <Route exact path="addShow" element={<ModalAddShow />} />
        <Route index path="shows" element={<Shows user={user} />} />
        <Route path="user/:username" element={<Profile />} />
        <Route path="show/:thetvdb/:episodeNum" element={<Episode user={user} />} loader={episodeLoader} />
        <Route path="show/:thetvdb" element={<Show user={user} />} loader={showLoader} />
        <Route path="*" element={<h1>404</h1>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
