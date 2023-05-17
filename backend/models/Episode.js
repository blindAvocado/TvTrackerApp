import mongoose from "mongoose";

const EpisodeSchema = new mongoose.Schema(
  {
    tvmazeId: { type: Number, required: true, unique: true },
    season: { type: Number, required: true },
    number: { type: Number, required: true },
    name: { type: String, required: true },
    runtime: { type: Number },
    airdate: { type: Date, required: true },
    summary: { type: String },
    image: {
      medium: { type: String },
      original: { type: String },
    },
    type: { type: String, enum: ["regular", "special"], required: true, default: "regular" },
    show: { type: mongoose.Schema.Types.ObjectId, ref: "Show", required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Episode", EpisodeSchema);
