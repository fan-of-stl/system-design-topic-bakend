const { default: mongoose } = require("mongoose");


const userSchema = mongoose.Schema({
    username: String,
    password: String
})

module.exports = mongoose.model('Users', userSchema)