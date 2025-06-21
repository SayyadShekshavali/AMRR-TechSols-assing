import Item from "../models/Item.js";
export const FetchItems = async (req, res) => {
  try {
    const items = await Item.find();
    return res.status(200).json(items);
  } catch (error) {
    console.error("❌ Error fetching items:", error);
    return res.status(500).json({ message: "Failed to fetch items" });
  }
};
