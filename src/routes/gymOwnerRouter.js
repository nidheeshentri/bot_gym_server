const express = require("express")
const router = express.Router()

const { createGymController, gymListController } = require("../controllers/gymOwnerController");
const { gymOwnerOnlyMiddleware } = require("../middlewares/authenticationMiddleware");

router.post("/gym", gymOwnerOnlyMiddleware, createGymController)
router.get("/gym", gymOwnerOnlyMiddleware, gymListController)

module.exports = router