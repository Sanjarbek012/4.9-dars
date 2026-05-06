const fs = require("fs");
const path = require("path"); 
const { v4: uuidv4 } = require("uuid");
const filePath = path.join(__dirname, "../data/products.json"); 

function readFile() {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

// helper
function readData() {
  return JSON.parse(fs.readFileSync(filePath));
}

function writeData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// GET ALL
exports.getAll = (req, res) => {
  const products = readData();
  res.render("index", { products });
};

// GET ONE
exports.getOne = (req, res) => {
  const products = readData();
  const product = products.find(p => p.id == req.params.id);

  if (!product) return res.send("Topilmadi");

  res.render("show", { product });
};

// POST
exports.create = (req, res) => {
  const products = readData();

  const newProduct = {
    id: Date.now(),
    name: req.body.name,
    price: req.body.price,
    desc: req.body.desc
  };

  products.push(newProduct);
  writeData(products);

  res.redirect("/");
};

// UPDATE
exports.update = (req, res) => {
  const products = readData();

  const index = products.findIndex(p => p.id == req.params.id);

  products[index] = {
    ...products[index],
    name: req.body.name,
    price: req.body.price,
    desc: req.body.desc
  };

  writeData(products);

  res.redirect("/");
};

// DELETE
exports.remove = (req, res) => {
  let products = readData();

  products = products.filter(p => p.id != req.params.id);

  writeData(products);

  res.redirect("/");
};