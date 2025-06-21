import mongoose from "mongoose";

export const MDBcnn = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Success: MongoDB is connected");
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:", error.message);
  }
};
