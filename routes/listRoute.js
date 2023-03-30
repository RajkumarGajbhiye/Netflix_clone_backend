const express = require("express");
const {protected} = require("../controller/authController.js")
const {createList,deleteList,displayAllList} = require("../controller/listController.js")
const router = express.Router();

router.post("/create",protected, createList)
router.delete("/delete/:id",protected, deleteList)
router.get("/getalllist",displayAllList)
module.exports = router;