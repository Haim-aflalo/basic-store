import fs from "fs";

export async function read() {
  return JSON.parse(await fs.promises.readFile("./data/products.json"));
}

// export async function write(data) {
//   return fs.promises.writeFile("./data/products.json", JSON.parse(data));
// }

