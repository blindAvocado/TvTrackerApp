import mongoose from "mongoose";

const ListSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  ranked: { type: Boolean, required: true, default: false },
  items: [
    {
      type: {
        type: String,
        enum: ["show", "episode"],
        required: true,
      },
      show: { type: mongoose.Schema.Types.ObjectId, ref: "Show" },
      episode: { type: mongoose.Schema.Types.ObjectId, ref: "Episode" },
      rank: { type: Number, min: 1, default: 1 },
    },
  ],
});

export default mongoose.model("List", ListSchema);