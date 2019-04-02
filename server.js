const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 6500

// my middleswares
app.use(express.json())
app.use(morgan('dev'))
app.use("/api", expressJwt({secret: process.env.SECRET}))

// My database Connect to mongoose
mongoose.connect('mongodb://localhost:27017/auth-lessons', {useNewUrlParser: true}, () => {
    console.log("[o] Connected to the Database")
})


// My routes
app.use('/auth', require('./routes/authRoutes.js'))
// app.use('/api/user', require("./routes/userRoutes.js"))
// app.use('/api/post', require("./routes/postRoutes.js"))


// Global Server Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    if(err, name === "UnauthorizedError") {
        res.status
    }
    return
    res.send({errMsg: err.message})
})

// server set up

app.listen(PORT, () => {
    console.log(`[+] Server is running on Port ${PORT}`)
})