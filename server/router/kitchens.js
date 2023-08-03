const express = require("express");
const router = express.Router();
const {
  getKitchens,
  getMyKitchen,
  addKitchen,
  getKitchenDetails,
  addDish,
  editDish,
  removeDish,
} = require("../controller/kitchensController");
const verifyToken = require("../middleware/verifyToken");

router.route("/").get(getKitchens).post(addKitchen);

router.route("/my-kitchen").get(verifyToken, getMyKitchen);

router.route("/:id").get(getKitchenDetails);

router.route("/add-kitchen").post(verifyToken, addKitchen);

router.route("/add-dish").post(verifyToken, addDish);

router.route("/edit-dish").patch(verifyToken, editDish);

router.route("/remove-dish/:id").delete(verifyToken, removeDish);

module.exports = router;
