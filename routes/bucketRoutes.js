const express = require("express")
const bucketRouter = express.Router()
const bucketList = require()

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
    const buckletList = new bucketList(req.body)
    bucketList.user = req.user._id 
    bucketList.save(function (err, newBucketList) {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.send(bucketList)
    })
})

bucketListRouter.get("/: bucketListId", (req, res, next) => {
    bucketList.findOne({_id: req.params.bucketListId, user: req.user._id}, (err, bucketList) => {
       if (err) {
           res.status(500)
           return next(err)
       } 
       if (!bucketList) {
           res.status(404)
           return next(new Error("List item not found"))
       }
       return res.send(bucketList)
    })
})

bucketListRouter.put("/: bucketListId", (req, res, next) => {
    bucketList.findOneAndUpdate(
       {_id:req.params.bucketListId, user: req.user._id},
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

bucketList.delete("/: bucketListId", (req, res, next) => {
    bucketList.findOneAndRemove({_id: req.params.bucketListid, user: req.user._id}, (err, bucketList) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.send(bucketList)
    })
})

module.exports = bucketListRouter