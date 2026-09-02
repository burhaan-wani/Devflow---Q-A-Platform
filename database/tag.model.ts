import { Schema, model, models } from "mongoose";

interface ITag {
  name: string;
  questions: number;
}

const tagSchema = new Schema<ITag>(
  {
    name: { type: String, required: true },
    questions: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);

const Tag = models?.Tag || model<ITag>("Tag", tagSchema);

export default Tag;
