import { Routes, Route } from "react-router-dom";

import { Layout } from "./components";
import { Login, Registration, Profile, Show, Episode } from "./pages";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path=":username" element={<Profile />} />
          <Route path=":register" element={<Registration />} />
          <Route path=":login" element={<Login />} />
          <Route path=":showName" element={<Show />} />
          <Route path=":showName/:episodeNum" element={<Episode />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
