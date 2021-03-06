const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 6500
const path = require('path')

// my middleswares
app.use(express.json())
app.use(morgan('dev'))
app.use("/api", expressJwt({secret: process.env.SECRET}))
app.use(express.static(path.join(__dirname, "client", "build")))

// My database Connect to mongoose
mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost:27017/Auth', {useNewUrlParser: true}, () => {
    console.log("[o] Connected to the Database")
})


// My routes
app.use('/auth', require('./routes/authRoutes'))
app.use('/api/user', require("./routes/userRoutes.js"))
app.use('/api/post', require("./routes/bucketRoutes.js"))
app.use('/api/trustee', require("./routes/trusteeRoutes.js"))


// Global Server Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

// server set up
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(PORT, () => {
    console.log(`[+] Server is running on Port ${PORT}`)
})

