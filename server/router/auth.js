const express = require("express");

const router = express.Router();

const { login, signin } = require("../controller/authController");
const verifyToken = require("../middleware/verifyToken");

router.route("/login").post(login);

router.route("/signin").post(signin);

router.route("/payload").get(verifyToken,(req,res)=>{res.json(req.user)});

module.exports = router;
