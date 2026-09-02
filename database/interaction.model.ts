import { Schema, Types, model, models } from "mongoose";

interface IInteraction {
  author: Types.ObjectId;
  action: string;
  actionId: Types.ObjectId;
  actionType: "Question" | "Answer";
}

const interactionSchema = new Schema<IInteraction>(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    action: { type: String, required: true },
    actionId: { type: Schema.Types.ObjectId, required: true },
    actionType: { type: String, enum: ["Question", "Answer"], required: true },
  },
  {
    timestamps: true,
  },
);

const Interaction =
  models?.Interaction || model<IInteraction>("Interaction", interactionSchema);

export default Interaction;
