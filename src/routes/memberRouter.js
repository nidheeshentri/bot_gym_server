const express = require("express")
const { joinGymController, reviewController } = require("../controllers/memberController")
const { memberOnlyMiddleware } = require("../middlewares/authenticationMiddleware")
const router = express.Router()


router.put("/join-gym", memberOnlyMiddleware, joinGymController)
router.post("/review-gym", memberOnlyMiddleware, reviewController)

module.exports = router