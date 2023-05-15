import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

import { Layout } from "./components";
import { Login, Registration, Profile, Show, Episode } from "./pages";

import "./App.css";

function App() {
  const [user, setUser] = useState({ isLoggedIn: false });

  const getUser = async () => {
    if (!user.isLoggedIn && Cookies.get("access_token")) {
      await fetch("http://localhost:4444/api/auth/me", {
        credentials: "include",
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }

          return Promise.reject(res);
        })
        .then((data) => {
          console.log(data);
          setUser({ ...data, isLoggedIn: true });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getUser();
  });

  return (
    <div className="App">
      <Layout>
        <div className="content">
          <div className="container">
            <Routes>
              {user.isLoggedIn ? <Route path="/" element={<Profile />} /> : <Route path="/" element={<Login />} />}
              {user.isLoggedIn ? (
                <Route path="login" element={<Profile />} />
              ) : (
                <Route path="login" element={<Login />} />
              )}
              {user.isLoggedIn ? (
                <Route path="register" element={<Profile />} />
              ) : (
                <Route path="register" element={<Registration />} />
              )}
              <Route path=":username" element={<Profile />} />
              <Route path="show/:showName" element={<Show />} />
              <Route path="show/:showName/:episodeNum" element={<Episode />} />
            </Routes>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default App;
