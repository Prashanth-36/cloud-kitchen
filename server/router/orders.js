const express = require("express");
const router = express.Router();
const { placeOrder, getOrders } = require("../controller/ordersController");
const verifyToken = require("../middleware/verifyToken");

router.use(verifyToken);
router.route("/").post(placeOrder);
router.route("/:id").get(getOrders);

module.exports = router;
