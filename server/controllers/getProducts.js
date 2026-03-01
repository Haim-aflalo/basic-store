import { read } from "../utils/functions.js";
export async function getProducts(req, res) {
  try {
    const products = read();
    res.status(400).json({ products });
  } catch (error) {
    res.json({ error });
  }
}
