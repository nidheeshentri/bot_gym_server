const express = require("express")
const { joinGymController, reviewController, personalDetailsController } = require("../controllers/memberController")
const { memberOnlyMiddleware } = require("../middlewares/authenticationMiddleware")
const router = express.Router()


router.put("/join-gym", memberOnlyMiddleware, joinGymController)
router.post("/review-gym", memberOnlyMiddleware, reviewController)
router.post("/personal-details", memberOnlyMiddleware, personalDetailsController)

module.exports = router