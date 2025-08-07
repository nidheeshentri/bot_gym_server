const GymModel = require("../models/gymModel")
const ReviewModel = require("../models/reviewModel")
const { getValidationErrorMessage } = require("../utils/validationUtils")

const joinGymController = async (req, res) => {
    try{
        const user = req.user
        const gymID = req.body.gymID
        const gym = await GymModel.findById(gymID)
        user.gym = gymID
        await user.save()
    
        res.json({message: "Joined to gym successfully", gym})
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

const reviewController = async (req, res) => {
    try{
        const user = req.user
        const gym = await GymModel.findById(user.gym)
        const data = req.body
        data.review_by = user._id
        const review = await ReviewModel.create(data)
        gym.reviews.push(review._id)
        await gym.save()

        res.json({message: "Review added successfully", gym, review})
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

module.exports = {joinGymController, reviewController}