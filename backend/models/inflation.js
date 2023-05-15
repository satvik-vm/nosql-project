const mongoose = require("mongoose");

const inflation_schema = new mongoose.Schema({
    Name:{
        type: String,
        required: [true]
    },
    '2021':{
        type: Number,
    },
    '2020':{
        type: Number,
    },
    '2019':{
        type: Number,
    },
    '2018':{
        type: Number,
    },
    '2017':{
        type: Number,
    }
});

const inflation_model = mongoose.model("inflation", inflation_schema);

module.exports = inflation_model;
