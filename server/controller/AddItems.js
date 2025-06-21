import Item from "../models/Item.js";
import upload from "../middlewares/multer.js";
export const AddItem = async (req, res) => {
  try {
    const { name, description, type } = req.body;
    const photo = req.files?.photo?.[0];
    const addtional = req.files?.addtional?.[0];

    if (!name || !description || !type || !photo || !addtional) {
      return res.status(402).json({ message: "Invalid details submission" });
    }

    const newItem = new Item({
      name,
      description,
      photo: photo.filename,
      type,
      addtional: addtional.filename,
    });

    await newItem.save();

    return res.status(200).json({ message: "Item added successfully" });
  } catch (error) {
    console.error("Error in this", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
