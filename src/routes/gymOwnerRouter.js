const express = require("express")
const router = express.Router()

const { createGymController, gymListController, createCouponController, createSubscriptionPlanController } = require("../controllers/gymOwnerController");
const { gymOwnerOnlyMiddleware } = require("../middlewares/authenticationMiddleware");

router.post("/gym", gymOwnerOnlyMiddleware, createGymController)
router.get("/gym", gymOwnerOnlyMiddleware, gymListController)
router.post("/create-coupon", gymOwnerOnlyMiddleware, createCouponController)
router.post("/create-subscription-plan", gymOwnerOnlyMiddleware, createSubscriptionPlanController)

module.exports = router