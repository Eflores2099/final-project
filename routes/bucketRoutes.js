const express = require("express")
const bucketRouter = express.Router()
const bucketList = require('../models/bucketList')

bucketRouter.get("/", (req, res, next) => {
    bucketList.find({user: req.user._id}, (err, bucketList) => {
        if (err){
            res.status(500)
            return next(err)
        }
        return res.send(bucketList)
    })
})

bucketRouter.post("/", (req, res, next) => {
    const newBucket = new bucketList(req.body)
    newBucket.user = req.user._id 
    newBucket.save(function (err, newBucketList) {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.send(newBucketList)
    })
})


bucketRouter.put("/:bucket_list_id", (req, res, next) => {
    bucketList.findOneAndUpdate(
       {_id:req.params.bucket_list_id},
        req.body,
        {new: true},
        (err, bucketList) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.send(bucketList)
        }
    )
})

bucketRouter.delete("/:bucket_list_id", (req, res, next) => {
    bucketList.findOneAndRemove({_id: req.params.bucket_list_id, 
        user: req.user._id}, 
        (err, bucketList) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.send(bucketList)
    })
})

module.exports = bucketRouter