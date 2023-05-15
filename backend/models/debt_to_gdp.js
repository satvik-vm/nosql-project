const mongoose = require("mongoose");

const debt_to_gdp_schema = new mongoose.Schema({
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

const debt_to_gdp_model = mongoose.model("debt_to_gdp", debt_to_gdp_schema);

module.exports = debt_to_gdp_model;
