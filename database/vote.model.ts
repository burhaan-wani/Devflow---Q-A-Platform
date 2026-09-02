import { Schema, Types, model, models } from "mongoose";

interface IVote {
  author: Types.ObjectId;
  id: Types.ObjectId;
  type: "Question" | "Answer";
  voteType: "upvote" | "downvote";
}

const voteSchema = new Schema<IVote>(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    id: { type: Schema.Types.ObjectId, required: true },
    type: { type: String, enum: ["Question", "Answer"], required: true },
    voteType: { type: String, enum: ["upvote", "downvote"], required: true },
  },
  {
    timestamps: true,
  },
);

const Vote = models?.Vote || model<IVote>("Vote", voteSchema);

export default Vote;
