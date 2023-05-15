const mongoose = require("mongoose");

const total_reserve_schema = new mongoose.Schema({
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

const total_reserve_model = mongoose.model("total_reserve", total_reserve_schema);

module.exports = total_reserve_model;
