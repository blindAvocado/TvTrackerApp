import express from "express";
import { Router } from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

// import router from "./routes/index.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/userRouter.js";
import showRouter from "./routes/showRouter.js";
import episodeRouter from "./routes/episodeRouter.js";

mongoose
  .connect("mongodb://localhost:27017/TVTracker")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("Db error", err));

const app = express();
const router = Router();

app.use(cookieParser());
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  return res.json({message: "OK"});
});

app.use("/api", router);

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/shows", showRouter);
router.use("/episodes", episodeRouter);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Listening on localhost:4444");
});
