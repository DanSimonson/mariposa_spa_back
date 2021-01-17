const express = require("express");
const router = express.Router();

//import controllers
const { create, list } = require("../controllers/post");

router.post("/posts", create);
router.get("/posts", list);

module.exports = router;
