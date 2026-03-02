import { read } from "../utils/functions.js";
export async function getProducts(req, res) {
  try {
    const products = await read();
    res.status(200).json(products);
  } catch (error) {
    res.json({ error });
  }
}
