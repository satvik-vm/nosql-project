const mongoose = require("mongoose");

const gdp_growth_schema = new mongoose.Schema({
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

const gdp_growth_model = mongoose.model("gdp_growth", gdp_growth_schema);

module.exports = gdp_growth_model;
