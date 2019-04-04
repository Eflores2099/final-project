const express = require("express")
const trusteeRouter = express.Router()
const trustee = require("../models/trustee")

trusteeRouter.get("/", (req, res, next) =>{
    trustee.find({user:req.user._id}, (err, trustee) => {
        if (err){
            res.status(500)
            return next(err)
        }
        return res.send(trustee)
    })
})

trusteeRouter.post("/", (req,res, next) => {
    const newTrustee = new trustee(req.body)
    newTrustee.user = req.user._id
    newTrustee.save(function (err, newTrustee) {
        if (err) {
            res.status(500)
            return next(err)
        }
        return next(newTrustee)
    })
})

bucketRouter.put("/:trustee_id", (req, res, next) => {
    trustee.findOneAndUpdate(
        {_id:req.params.trustee_id},
        req.body,
        {new:true},
        (err, trustee) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.send(trustee)
        }
    )
})

trusteeRouter.delete("/:trustee_id", (req, res, next) => {
    trustee.findOneAndRemove(
        {_id: req.params.trustee_id, 
            user: req.user._id},
         (err, trustee) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.send(trustee)
    })
})


module.exports = trusteeRouter