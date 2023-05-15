const mongoose = require("mongoose");

const fiscal_balance_schema = new mongoose.Schema({
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

const fiscal_balance_model = mongoose.model("fiscal_balance", fiscal_balance_schema);

module.exports = fiscal_balance_model;
