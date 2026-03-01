import express from "express";
import cors from "cors";
import { productsRouter } from "./routes/productsRoutes.js";
const app = express();

app.use(cors());
app.use("/", productsRouter);

app.listen(3000, () => {
  console.log("server run...");
});
