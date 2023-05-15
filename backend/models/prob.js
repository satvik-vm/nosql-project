const mongoose = require("mongoose");

const prob = new mongoose.Schema({
    Name: String,
    prob: Number,
})

const prob_model = mongoose.model("prob", prob)

module.exports = prob_model