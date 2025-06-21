import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cover: { type: String },
  photto: { type: String },
  description: { type: String },
  type: { type: String },
  additional: { type: String },
});
const Item = mongoose.model("Item", ItemSchema);

export default Item;
