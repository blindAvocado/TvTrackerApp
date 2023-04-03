import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      maxLength: 32,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
    avatarUrl: String,
    activity: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    favoriteShows: [{ type: mongoose.Schema.Types.ObjectId, ref: "Show" }],
    favoriteEpisodes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Episode" }],
    lists: [{ type: mongoose.Schema.Types.ObjectId, ref: "List" }],
    diary: [
      {
        show: { type: mongoose.Schema.Types.ObjectId, ref: "Show", required: true },
        episode: { type: mongoose.Schema.Types.ObjectId, ref: "Episode" },
        watchedDate: { type: Date, default: Date.now },
        rating: { type: Number, default: 0 },
        favorite: { type: Boolean, default: false },
        timestamp: { type: Date, required: true, default: Date.now },
      },
    ],
    watchedEpisodes: [
      {
        episode: { type: mongoose.Schema.Types.ObjectId, ref: "Episode" },
        rating: { type: Number, default: 0 },
        isFavorite: { type: Boolean, default: false },
      },
    ],
    watchedShows: [
      {
        show: { type: mongoose.Schema.Types.ObjectId, ref: "Show" },
        watchStatus: { type: String, enum: ["Watching", "Going to", "Stopped", "Watched all"] },
        rating: { type: Number, default: 0 },
        isFavorite: { type: Boolean, default: false },
        watchedDate: { type: Date, default: Date.now },
      },
    ],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);