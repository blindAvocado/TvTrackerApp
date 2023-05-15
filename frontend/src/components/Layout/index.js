import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import { Header, Footer } from "../../components";

export const Layout = ({ children, user }) => {

  console.log(user);

  return (
    <div className="App">
      <Header user={user} />
      <main className="content">
          <div className="container">
            <Outlet />
          </div>
      </main>
      <Footer />
    </div>
  );
};
