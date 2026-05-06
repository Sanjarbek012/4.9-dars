const express = require("express");
const path = require("path");
require("dotenv").config();

const productRoutes = require("./router/product.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

app.use("/", productRoutes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});





function readFile() {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}
const { v4: uuidv4 } = require("uuid");