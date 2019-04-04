const mongoose = require('mongoose')
const Schema = mongoose.Schema

const trusteeSchema = new Schema({
    trustee: {
        firstName: String,
        lastName: String,
        email: String,
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: "User",
        required: true
    }

})

module.exports = mongoose.model("trustee", trusteeSchema)