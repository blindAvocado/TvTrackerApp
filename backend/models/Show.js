import mongoose from "mongoose";

const ShowSchema = new mongoose.Schema(
  {
    tvmazeId: { type: Number, required: true, unique: true },
    title: {
      type: String,
      required: true,
    },
    description: String,
    image: {
      medium: { type: String },
      original: { type: String },
    },
    genres: [String],
    network: String,
    dateStarted: Date,
    dateEnded: Date,
    averageRuntime: Number,
    imdbId: String,
    thetvdb: String,
    status: {
      type: String,
      enum: ["Running", "TBD", "Ended"],
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    episodes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Episode" }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Show", ShowSchema);
