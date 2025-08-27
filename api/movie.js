import fs from "fs/promises";
import path from "path";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    const filePath = path.join(process.cwd(), "data.json");
    const data = await fs.readFile(filePath, "utf-8");
    res.status(200).send(data);
  } else {
    res.status(405).json({ error: "Only GET supported" });
  }
}
