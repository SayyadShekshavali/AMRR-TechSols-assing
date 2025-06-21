import express from "express";
const app = express();
const PORT = 8080;
import dotenv from "dotenv";
import cors from "cors";
import { MDBcnn } from "./MDBconnect.js";
import Router from "./routes/route.additems.js";
dotenv.config();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use("/api", Router);
MDBcnn();
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
