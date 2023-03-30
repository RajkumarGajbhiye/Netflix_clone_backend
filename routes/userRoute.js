const express = require("express");
const {protected} = require("../controller/authController.js")
const {updateUser,deleteUser,displaySingleUser,displayAllUser,userStats} = require("../controller/userController.js")
const router = express.Router();

router.patch("/update/:id",protected,updateUser)
router.delete("/delete/:id",protected,deleteUser)
router.get("/find/:id",displaySingleUser)
router.get("/findall",protected,displayAllUser)
router.get("/stats",userStats)
module.exports = router;