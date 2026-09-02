import { Schema, Types, model, models } from "mongoose";

interface IQuestion {
  author: Types.ObjectId;
  title: string;
  content: string;
  tags: Types.ObjectId[];
  views: number;
  upvotes: number;
  downvotes: number;
  answers: number;
}

const questionSchema = new Schema<IQuestion>(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: {
      type: [{ type: Schema.Types.ObjectId, ref: "Tags" }],
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    upvotes: {
      type: Number,
      default: 0,
    },
    downvotes: {
      type: Number,
      default: 0,
    },
    answers: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const Question =
  models?.Question || model<IQuestion>("Question", questionSchema);

export default Question;
