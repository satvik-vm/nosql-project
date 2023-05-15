const express = require("express");
const router = express.Router();

const {search_function, agg_debt_to_gdp, agg_fiscal_balance, agg_gdp_growth, agg_inflation, name_countries} = require("../controllers/auth")

router.route("/search_function").post(search_function)

router.route("/agg_debt_to_gdp").post(agg_debt_to_gdp)

router.route("/agg_fiscal_balance").post(agg_fiscal_balance)

router.route("/agg_gdp_growth").post(agg_gdp_growth)

router.route("/agg_inflation").post(agg_inflation)

router.route("/name_countries").post(name_countries)

module.exports = router