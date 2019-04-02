const express = require("express")
const userRouter = express.Router()
const User = require()

userRouter.put("/userinfo", (req, res, next) => {
    User.findOneAndUpdate(
        { _id: req.user._id },
        req.body,
        { new: true },
        (err, updatedUser) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedUser)
        }
    )
})

module.exports = userRouter