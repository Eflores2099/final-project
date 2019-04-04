const mongoose = require('mongoose')
const Schema = mongoose.Schema


const bucketSchema = new Schema({
    title: {
        type: String,
        completed: Boolean,
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: "User",
        required: true
    }
})




module.exports = mongoose.model("bucketList", bucketSchema)