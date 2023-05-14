import mongoose from "mongoose";

const RatingSchema = new mongoose.Schema(
  {
    show: { type: mongoose.Schema.Types.ObjectId, ref: "Show" },
    episode: { type: mongoose.Schema.Types.ObjectId, ref: "Episode" },
    ratings: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        rating: { type: Number, required: true, min: 1, max: 10 },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Rating", RatingSchema);
