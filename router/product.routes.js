const express = require("express");
const router = express.Router();

const {
  getAll,
  getOne,
  create,
  update,
  remove
} = require("../controller/product.controller");

// pages
router.get("/", getAll);
router.get("/product/:id", getOne);

// create
router.post("/add", create);

// update
router.post("/edit/:id", update);

// delete
router.get("/delete/:id", remove);

module.exports = router;