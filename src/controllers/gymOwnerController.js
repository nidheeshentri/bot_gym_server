const CouponModel = require("../models/couponModel")
const GymModel = require("../models/gymModel")
const SubscriptionModel = require("../models/subscriptionModel")
const SubscriptionPlanModel = require("../models/subscriptionPlanModel")
const { getValidationErrorMessage } = require("../utils/validationUtils")

const createGymController = async (req, res) => {
    try{
        const data = req. body
        data.gym_admin = req.user._id
        const gym = await (await GymModel.create(data)).populate("gym_admin")
        res.json({message: "Gym created successfully", gym})
    }catch(err){
        if (err.name === "ValidationError"){
            const message = getValidationErrorMessage(err)
            res.status(400).json({message: message})
        }
        else{
            res.status(500).json({message: "Something went wrong in the server. Please try after some time."})
        }
    }
}

const gymListController = async (req, res) => {
    try{
        const user = req.user
        const gymList = await GymModel.find({gym_admin: user._id})
        res.json({"message": "Gym list fetched successfully", gymList})
    }
    catch(err){
        res.status(500).json({message: "Something went wrong in the server. Please try after some time."})
    }
}

const createCouponController = async (req, res) => {
    try{
        const user = req.user
        const coupon = await CouponModel.create(req.body)
        const gym = await GymModel.findById(req.body.gymID)
        gym.coupons.push(coupon._id)
        console.log()
        await gym.save()
        res.json({message: "Coupon created successfully", coupon, gym})
    }catch(err){
        if (err.name === "ValidationError"){
            const message = getValidationErrorMessage(err)
            res.status(400).json({message: message})
        }
        else if (err.name === "CastError"){
            res.status(500).json({message: err.message})
        }
        else{
            res.status(500).json({message: "Something went wrong in the server. Please try after some time."})
        }
    }
}


const createSubscriptionPlanController = async (req, res) => {
    try{
        const user = req.user
        const subscriptionPlan = await SubscriptionPlanModel.create(req.body)
        const gym = await GymModel.findById(req.body.gymID)
        gym.subscription_plans.push(subscriptionPlan._id)
        await gym.save()

        res.json({message: "Subscription created successfully", gym, subscriptionPlan})
    }catch(err){
        if (err.name === "ValidationError"){
            const message = getValidationErrorMessage(err)
            res.status(400).json({message: message})
        }
        else if (err.name === "CastError"){
            res.status(500).json({message: err.message})
        }
        else{
            res.status(500).json({message: "Something went wrong in the server. Please try after some time."})
        }
    }
}

module.exports = {createGymController, gymListController, createCouponController, createSubscriptionPlanController}