const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require("bcrypt")




module.exports = mongoose.model("bucketList", bucketListSchema)