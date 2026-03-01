import express from "express";
import { getProducts } from "../controllers/getProducts.js";

export const productsRouter = express.Router();

productsRouter.get("products", (req, res) => {
  getProducts(req, res);
});
