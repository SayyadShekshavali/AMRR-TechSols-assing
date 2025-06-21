import { AddItem } from "../controller/AddItems.js";
import express from "express";
import upload from "../middlewares/multer.js";
import { FetchItems } from "../controller/fetchall.js";
import { getItemById } from "../controller/idetails.js";
const Router = express.Router();
Router.post(
  "/additem",
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "addtional", maxCount: 1 },
  ]),
  AddItem
);
Router.get("/fetchall", FetchItems);
Router.get("/item/:id", getItemById);
export default Router;
