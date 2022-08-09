const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,

    },
    password: {

        type: String,
        require: true
    },
})
const users = new mongoose.model("users", userSchema);
module.exports = users;
