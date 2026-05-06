const express = require("express");
const router = express.Router();

const {
  getAll,
  getOne,
  create,
  update,
  remove
} = require("../controller/product.controller");

// GET ALL
router.get("/", getAll);

// GET ONE
router.get("/:id", getOne);

// CREATE
router.post("/add", create);

// UPDATE
router.post("/edit/:id", update);

// DELETE
router.get("/delete/:id", remove);

module.exports = router;