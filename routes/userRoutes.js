const express = require("express")
const userRouter = express.Router()
const User = require("../models/user")

userRouter.put("/profile", (req, res, next) => {
    User.findOneAndUpdate(
       {_id: req.user._id},
       req.body,
        {new: true},
        (err, User) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.send(User)
        }
    )
})

module.exports = userRouter