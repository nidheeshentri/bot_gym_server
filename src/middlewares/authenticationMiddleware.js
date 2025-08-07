
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");
const JWT_SECRET = process.env.JWT_SECRET

const getUserMiddleware = async (req, res, next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1]
        var decoded = jwt.verify(token, JWT_SECRET);
        console.log(decoded)
        const user = await UserModel.findOne({email: decoded.email})
        req.user = user
    }catch(err){
        console.log("Not authorized")
    }
    next()
}

const adminOnlyMiddleware = (req, res, next) => {
    // if (req.user.role === "admin"){
    //     next()
    // }else{
    //     return res.status(401).json({message: "User is not admin"})
    // }
    next()
}

const gymOwnerOnlyMiddleware = (req, res, next) => {
    if (req.user.role === "gym_owner"){
        next()
    }else{
        return res.status(401).json({message: "User is not a Gym owner"})
    }
}

const memberOnlyMiddleware = (req, res, next) => {
    if (req.user){
        next()
    }else{
        return res.status(401).json({message: "User not logged in"})
    }
}

module.exports = {adminOnlyMiddleware, gymOwnerOnlyMiddleware, getUserMiddleware, memberOnlyMiddleware}

