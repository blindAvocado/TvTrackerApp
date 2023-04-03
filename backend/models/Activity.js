import mongoose from "mongoose";

const ActivitySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    activity: {
      type: String,
      enum: [
        "watching",
        "goingToWatch",
        "stoppedWatching",
        "notWatching",
        "watched",
        "followed",
        "createdList",
        "deletedList",
        "commented"
      ],
      required: true,
    },
    timestamp: { type: Date, default: Date.now },
    show: { type: mongoose.Schema.Types.ObjectId, ref: "Show" },
    episode: { type: mongoose.Schema.Types.ObjectId, ref: "Episode" },
    userTarget: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    list: { type: mongoose.Schema.Types.ObjectId, ref: "List" },
    list: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Activity", ActivitySchema);
