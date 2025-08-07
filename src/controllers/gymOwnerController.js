const GymModel = require("../models/gymModel")
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

module.exports = {createGymController, gymListController}