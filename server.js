const express = require("express")
const app = express()
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
var cors = require('cors')


require('dotenv').config()
var corsOptions = {
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200,
  credentials: true
}
app.use(cors(corsOptions))

const userRouter = require("./src/routes/userRouter")
const adminGymRouter = require("./src/routes/adminGymRouter")
const gymOwnerRouter = require("./src/routes/gymOwnerRouter");
const memberRouter = require("./src/routes/memberRouter");
const { getUserMiddleware } = require("./src/middlewares/authenticationMiddleware");


const port = process.env.PORT
const dbConnectionLink = process.env.DB_CONNECTION_LINK

mongoose.connect(dbConnectionLink).then(res => {
    console.log("DB connected")
})

console.log(port)

app.use(cookieParser());
app.use(express.json());
app.use(getUserMiddleware)

app.get("/", (req, res) => {
    res.send("<h1>Gym updated</h1>")
})

app.use("/api/user", userRouter)
app.use("/api/admin", adminGymRouter)
app.use("/api/gym-owner", gymOwnerRouter)
app.use("/api/member", memberRouter)

app.listen(port, () => {
    console.log(`Server running on PORT ${port}`)
})