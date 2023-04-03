import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import router from "./routes/index.js";

mongoose
  .connect("mongodb://localhost:27017/TVTracker")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("Db error", err));

const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  return res.json({message: "OK"});
});

app.use("/api", router);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Listening on localhost:4444");
});
