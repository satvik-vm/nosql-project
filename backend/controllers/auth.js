const debt_to_gdp = require("../models/debt_to_gdp")
const fiscal_balance = require("../models/fiscal_balance")
const gdp_growth = require("../models/gdp_growth")
const inflation = require("../models/inflation")
const total_reserves = require("../models/total_reserve")
const prob = require("../models/prob")

exports.search_function = async (req, res) => {
    const {option, input} = req.body;

    const country_name = input

    const debt_to_gdp_data = await debt_to_gdp.findOne({Name: country_name})

    const fiscal_balance_data = await fiscal_balance.findOne({Name: country_name})

    const inflation_data = await inflation.findOne({Name: country_name})

    const gdp_growth_data = await gdp_growth.findOne({Name: country_name})

    const total_reserve_data = await total_reserves.findOne({Name: country_name})

    const prob_data = await prob.findOne({Name: country_name})

    res.status(200).json({
        "probability": prob_data,
        "debt_to_gdp": debt_to_gdp_data,
        "fiscal_balance": fiscal_balance_data,
        "inflation": inflation_data,
        "gdp_growth": gdp_growth_data,
        "total_reserve": total_reserve_data
    })
}

exports.agg_debt_to_gdp = async (req, res) => {
    var year = "2021"
    var {option, input} = req.body;
    year = input;
    var __year = "$" + year;
    console.log(year, __year);
    const pipeline = [
        {
            $group: {
              _id: {
                $cond: [
                  { $and: [
                    { $gte: [__year, 0] },  // Lower range value
                    { $lt: [__year, 20] }   // Upper range value
                  ]},
                  '0-20',                  // Group label for the range 0-10
                  {
                    $cond: [
                      { $and: [
                        { $gte: [__year, 20] }, // Lower range value
                        { $lt: [__year, 40] }   // Upper range value
                      ]},
                      '20-40',                  // Group label for the range 10-20
                    //   'Others'                  // Group label for other cases
                    {
                        $cond: [
                            { $and: [
                                { $gte: [__year, 40] }, // Lower range value
                                { $lt: [__year, 60] }   // Upper range value
                            ]},
                            '40-60',
                            {
                                $cond: [
                                    { $and: [
                                        { $gte: [__year, 60] }, // Lower range value
                                        { $lt: [__year, 80] }   // Upper range value
                                    ]},
                                    '60-80',
                                    {
                                        $cond: [
                                            { $and: [
                                                { $gte: [__year, 80] }, // Lower range value
                                                { $lt: [__year, 100] }   // Upper range value
                                            ]},
                                            '80-100',
                                            {
                                                $cond: [
                                                    { $ne: [__year, 'not available'] }, // Check if the field is not 'not available'
                                                    '$data',                             // Group by the field value if not 'not available'
                                                    'Not Available'                       // Group label for 'not available'
                                                ]
                                            }
                                            // 'Above 100'
                                        ]
                                    } 
                                ]
                            }
                        ]
                    }
                    ]
                  }
                ]
              },
              count: { $sum: 1 } // Count the documents in each group
            }
        }
    ]

    debt_to_gdp.aggregate(pipeline)
    .then((result)=>{
        console.log(result);
        res.status(200).json({
            "Distribution": result
        })
    })
}

exports.agg_fiscal_balance = async (req, res) => {
    var year = "2020"
    var {option, input} = req.body;
    year = input;
    var __year = "$" + year;

    const pipeline = [
        {
            $group: {
              _id: {
                $cond: [
                    { $and: [
                        // { $gte: [__year, 0] }, // Lower range value
                        { $lt: [__year, -20] }   // Upper range value
                    ]},
                    'Less than -20',
                    {
                        $cond: [
                          { $and: [
                            { $gte: [__year, -20] },  // Lower range value
                            { $lt: [__year, -10] }   // Upper range value
                          ]},
                          '-20 to -10',                  // Group label for the range 0-10
                          {
                            $cond: [
                              { $and: [
                                { $gte: [__year, -10] }, // Lower range value
                                { $lt: [__year, 0] }   // Upper range value
                              ]},
                              '-10 to 0',                  // Group label for the range 10-20
                            //   'Others'                  // Group label for other cases
                            {
                                $cond: [
                                    { $and: [
                                        { $gte: [__year, 0] }, // Lower range value
                                        { $lt: [__year, 10] }   // Upper range value
                                    ]},
                                    '0 to 10',
                                    {
                                        $cond: [
                                            { $and: [
                                                { $gte: [__year, 10] }, // Lower range value
                                                { $lt: [__year, 20] }   // Upper range value
                                            ]},
                                            '10 to 20',
                                            {
                                                $cond: [
                                                    { $and: [
                                                        { $gte: [__year, 20] }, // Lower range value
                                                        { $lt: [__year, 30] }   // Upper range value
                                                    ]},
                                                    '20 to 30',
                                                    {
                                                        $cond: [
                                                            { $and: [
                                                                { $gte: [__year, 30] }, // Lower range value
                                                                { $lt: [__year, 40] }   // Upper range value
                                                            ]},
                                                            '30 to 40',
                                                            {
                                                                $cond: [
                                                                    { $and: [
                                                                        { $gte: [__year, 40] }, // Lower range value
                                                                        { $lt: [__year, 50] }   // Upper range value
                                                                    ]},
                                                                    '40 to 50',
                                                                    {
                                                                        $cond: [
                                                                            { $and: [
                                                                                { $gte: [__year, 50] }, // Lower range value
                                                                                { $lt: [__year, 60] }   // Upper range value
                                                                            ]},
                                                                            '50 to 60',{
                                                                                $cond: [
                                                                                    { $and: [
                                                                                        { $gte: [__year, 60] }, // Lower range value
                                                                                        { $lt: [__year, 70] }   // Upper range value
                                                                                    ]},
                                                                                    '60 to 70',
                                                                                    {
                                                                                        $cond: [
                                                                                            { $and: [
                                                                                                { $gte: [__year, 70] }, // Lower range value
                                                                                                { $lt: [__year, 80] }   // Upper range value
                                                                                            ]},
                                                                                            '70 to 80',
                                                                                            // 'Above 80'
                                                                                            {
                                                                                                $cond: [
                                                                                                    { $and: [
                                                                                                        { $gte: [__year, 80] }, // Lower range value
                                                                                                        { $lt: [__year, 90] }   // Upper range value
                                                                                                    ]},
                                                                                                    '80 to 90',
                                                                                                    {
                                                                                                        $cond: [
                                                                                                            { $and: [
                                                                                                                { $gte: [__year, 90] }, // Lower range value
                                                                                                                { $lt: [__year, 100] }   // Upper range value
                                                                                                            ]},
                                                                                                            '90 to 100',
                                                                                                            {
                                                                                                                $cond: [
                                                                                                                    { $and: [
                                                                                                                        { $gte: [__year, 100] }, // Lower range value
                                                                                                                        { $lt: [__year, 110] }   // Upper range value
                                                                                                                    ]},
                                                                                                                    '100 to 110',
                                                                                                                    {
                                                                                                                        $cond: [
                                                                                                                            { $and: [
                                                                                                                                { $gte: [__year, 110] }, // Lower range value
                                                                                                                                { $lt: [__year, 120] }   // Upper range value
                                                                                                                            ]},
                                                                                                                            '110 to 120',
                                                                                                                            {
                                                                                                                                $cond: [
                                                                                                                                    { $and: [
                                                                                                                                        { $gte: [__year, 120] }, // Lower range value
                                                                                                                                        { $lt: [__year, 130] }   // Upper range value
                                                                                                                                    ]},
                                                                                                                                    '120 to 130',
                                                                                                                                    // 'Above 130'
                                                                                                                                    {
                                                                                                                                        $cond: [
                                                                                                                                            { $and: [
                                                                                                                                                { $gte: [__year, 130] }, // Lower range value
                                                                                                                                                { $lt: [__year, 140] }   // Upper range value
                                                                                                                                            ]},
                                                                                                                                            '130 to 140',
                                                                                                                                            // 'Above 130'
                                                                                                                                            {
                                                                                                                                                $cond: [
                                                                                                                                                    { $and: [
                                                                                                                                                        { $gte: [__year, 140] }, // Lower range value
                                                                                                                                                        { $lt: [__year, 150] }   // Upper range value
                                                                                                                                                    ]},
                                                                                                                                                    '140 to 150',
                                                                                                                                                    // 'Above 130'
                                                                                                                                                    {
                                                                                                                                                        $cond: [
                                                                                                                                                            { $and: [
                                                                                                                                                                { $gte: [__year, 150] }, // Lower range value
                                                                                                                                                                { $lt: [__year, 160] }   // Upper range value
                                                                                                                                                            ]},
                                                                                                                                                            '150 to 160',
                                                                                                                                                            // 'Above 130'
                                                                                                                                                            {
                                                                                                                                                                $cond: [
                                                                                                                                                                    { $and: [
                                                                                                                                                                        { $gte: [__year, 160] }, // Lower range value
                                                                                                                                                                        { $lt: [__year, 170] }   // Upper range value
                                                                                                                                                                    ]},
                                                                                                                                                                    '160 to 170',
                                                                                                                                                                    // 'Above 130'
                                                                                                                                                                    {
                                                                                                                                                                        $cond: [
                                                                                                                                                                            { $and: [
                                                                                                                                                                                { $gte: [__year, 170] }, // Lower range value
                                                                                                                                                                                { $lt: [__year, 180] }   // Upper range value
                                                                                                                                                                            ]},
                                                                                                                                                                            '170 to 180',
                                                                                                                                                                            // 'Above 130'
                                                                                                                                                                            {
                                                                                                                                                                                $cond: [
                                                                                                                                                                                    { $and: [
                                                                                                                                                                                        { $gte: [__year, 180] }, // Lower range value
                                                                                                                                                                                        { $lt: [__year, 190] }   // Upper range value
                                                                                                                                                                                    ]},
                                                                                                                                                                                    '180 to 190',
                                                                                                                                                                                    // 'Above 130'
                                                                                                                                                                                    {
                                                                                                                                                                                        $cond: [
                                                                                                                                                                                            { $and: [
                                                                                                                                                                                                { $gte: [__year, 190] }, // Lower range value
                                                                                                                                                                                                { $lt: [__year, 200] }   // Upper range value
                                                                                                                                                                                            ]},
                                                                                                                                                                                            '190 to 200',
                                                                                                                                                                                            // 'Above 200'
                                                                                                                                                                                            {
                                                                                                                                                                                                $cond: [
                                                                                                                                                                                                    { $ne: [__year, 'not available'] }, // Check if the field is not 'not available'
                                                                                                                                                                                                    '$data',                             // Group by the field value if not 'not available'
                                                                                                                                                                                                    'Not Available'                       // Group label for 'not available'
                                                                                                                                                                                                ]
                                                                                                                                                                                            }
                                                                                                                                                                                        ] 
                                                                                                                                                                                    }
                                                                                                                                                                                ]
                                                                                                                                                                            }
                                                                                                                                                                        ]
                                                                                                                                                                    }
                                                                                                                                                                ] 
                                                                                                                                                            }
                                                                                                                                                        ]
                                                                                                                                                    }
                                                                                                                                                ]
                                                                                                                                            }
                                                                                                                                        ]
                                                                                                                                    }
                                                                                                                                ]
                                                                                                                            }
                                                                                                                        ]    
                                                                                                                    }
                                                                                                                ]
                                                                                                            }
                                                                                                        ] 
                                                                                                    }
                                                                                                ]  
                                                                                            }
                                                                                        ] 
                                                                                    }
                                                                                ]

                                                                            }
                                                                        ] 
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            } 
                                        ]
                                    }
                                ]
                            }
                            ]
                          }
                        ]
                    }
                ]
              },
              count: { $sum: 1 } // Count the documents in each group
            }
        }
    ]

    fiscal_balance.aggregate(pipeline)
    .then((result)=>{
        // console.log(result)
        res.status(200).json({
            "Distribution": result
        })
    })
}

exports.agg_gdp_growth = async (req, res) => {
    var year = "2021"
    var {option, input} = req.body;
    year = input;
    var __year = "$" + year;
    const pipeline = [
        {
            $group: {
              _id: {
                $cond: [
                  { $and: [
                    // { $gte: [__year, 0] },  // Lower range value
                    { $lt: [__year, 0] }   // Upper range value
                  ]},
                  'Less than 0',                  // Group label for the range 0-10
                  {
                    $cond: [
                      { $and: [
                        { $gte: [__year, 0] }, // Lower range value
                        { $lt: [__year, 2] }   // Upper range value
                      ]},
                      '0-2',                  // Group label for the range 10-20
                    //   'Others'                  // Group label for other cases
                    {
                        $cond: [
                            { $and: [
                                { $gte: [__year, 2] }, // Lower range value
                                { $lt: [__year, 4] }   // Upper range value
                            ]},
                            '2-4',
                            {
                                $cond: [
                                    { $and: [
                                        { $gte: [__year, 4] }, // Lower range value
                                        { $lt: [__year, 6] }   // Upper range value
                                    ]},
                                    '4-6',
                                    {
                                        $cond: [
                                            { $and: [
                                                { $gte: [__year, 6] }, // Lower range value
                                                { $lt: [__year, 8] }   // Upper range value
                                            ]},
                                            '6-8',
                                            {
                                                $cond: [
                                                    { $and: [
                                                        { $gte: [__year, 8] }, // Lower range value
                                                        { $lt: [__year, 10] }   // Upper range value
                                                    ]},
                                                    '8-10',
                                                    {
                                                        $cond: [
                                                            { $ne: [__year, 'not available'] }, // Check if the field is not 'not available'
                                                            '$data',                             // Group by the field value if not 'not available'
                                                            'Not Available'                       // Group label for 'not available'
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                    ]
                  }
                ]
              },
              count: { $sum: 1 } // Count the documents in each group
            }
        }
    ]

    gdp_growth.aggregate(pipeline)
    .then((result)=>{
        res.status(200).json({
            "Distribution": result
        })
    })
}

exports.agg_inflation = async (req, res) => {
    var year = "2021"
    var {option, input} = req.body;
    year = input;
    var __year = "$" + year;
    const pipeline = [
        {
            $group: {
              _id: {
                $cond: [
                  { $and: [
                    // { $gte: [__year, 0] },  // Lower range value
                    { $lt: [__year, 0] }   // Upper range value
                  ]},
                  'Less than 0',                  // Group label for the range 0-10
                  {
                    $cond: [
                      { $and: [
                        { $gte: [__year, 0] }, // Lower range value
                        { $lt: [__year, 1] }   // Upper range value
                      ]},
                      '0-1',                  // Group label for the range 10-20
                    //   'Others'                  // Group label for other cases
                    {
                        $cond: [
                            { $and: [
                                { $gte: [__year, 1] }, // Lower range value
                                { $lt: [__year, 2] }   // Upper range value
                            ]},
                            '1-2',
                            {
                                $cond: [
                                    { $and: [
                                        { $gte: [__year, 2] }, // Lower range value
                                        { $lt: [__year, 3] }   // Upper range value
                                    ]},
                                    '2-3',
                                    {
                                        $cond: [
                                            { $and: [
                                                { $gte: [__year, 3] }, // Lower range value
                                                { $lt: [__year, 4] }   // Upper range value
                                            ]},
                                            '3-4',
                                            {
                                                $cond: [
                                                    { $and: [
                                                        { $gte: [__year, 4] }, // Lower range value
                                                        { $lt: [__year, 5] }   // Upper range value
                                                    ]},
                                                    '4-5',
                                                    {
                                                        $cond: [
                                                            { $and: [
                                                                { $gte: [__year, 5] }, // Lower range value
                                                                { $lt: [__year, 6] }   // Upper range value
                                                            ]},
                                                            '5-6',
                                                            {
                                                                $cond: [
                                                                    { $and: [
                                                                        { $gte: [__year, 6] }, // Lower range value
                                                                        { $lt: [__year, 7] }   // Upper range value
                                                                    ]},
                                                                    '6-7',
                                                                    {
                                                                        $cond: [
                                                                            { $and: [
                                                                                { $gte: [__year, 7] }, // Lower range value
                                                                                { $lt: [__year, 8] }   // Upper range value
                                                                            ]},
                                                                            '7-8',
                                                                            {
                                                                                $cond: [
                                                                                    { $and: [
                                                                                        { $gte: [__year, 8] }, // Lower range value
                                                                                        { $lt: [__year, 9] }   // Upper range value
                                                                                    ]},
                                                                                    '8-9',
                                                                                    {
                                                                                        $cond: [
                                                                                            { $and: [
                                                                                                { $gte: [__year, 9] }, // Lower range value
                                                                                                { $lt: [__year, 10] }   // Upper range value
                                                                                            ]},
                                                                                            '9-10',
                                                                                            {
                                                                                                $cond: [
                                                                                                    { $ne: [__year, 'not available'] }, // Check if the field is not 'not available'
                                                                                                    '$data',                             // Group by the field value if not 'not available'
                                                                                                    'Not Available'                       // Group label for 'not available'
                                                                                                ]
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                    ]
                  }
                ]
              },
              count: { $sum: 1 } // Count the documents in each group
            }
        }
    ]

    inflation.aggregate(pipeline)
    .then((result) => {
        console.log(result)
        res.status(200).json({
            "Distribution": result
        })
    })
}

exports.name_countries = async (req, res) => {
    const name = []
    const docs = await debt_to_gdp.find({})
    docs.forEach(function(doc){
        name.push(doc["Name"])
    })
    // console.log(name)
    res.status(200).json({
        "data": name
    })
}

// const agg_total_reserve = () => {
//     var year = "2021"
//     var {year} = req.body
//     var __year = "$" + year;
//     const pipeline = [
//         {
//             $group: {
//               _id: {
//                 $cond: [
//                   { $and: [
//                     { $gte: [__year, 3000000000] },  // Lower range value
//                     { $lt: [__year, 6000000000] }   // Upper range value
//                   ]},
//                   '3-6',                  // Group label for the range 0-10
//                   {
//                     $cond: [
//                       { $and: [
//                         { $gte: [__year, 6000000000] }, // Lower range value
//                         { $lt: [__year, 9000000000] }   // Upper range value
//                       ]},
//                       '6-9',                  // Group label for the range 10-20
//                     //   'Others'                  // Group label for other cases
//                     {
//                         $cond: [
//                             { $and: [
//                                 { $gte: [__year, 9000000000] }, // Lower range value
//                                 { $lt: [__year, 12000000000] }   // Upper range value
//                             ]},
//                             '9-12',
//                             {
//                                 $cond: [
//                                     { $and: [
//                                         { $gte: [__year, 12000000000] }, // Lower range value
//                                         { $lt: [__year, 15000000000] }   // Upper range value
//                                     ]},
//                                     '12-15',
//                                     {
//                                         $cond: [
//                                             { $and: [
//                                                 { $gte: [__year, 15000000000] }, // Lower range value
//                                                 { $lt: [__year, 18000000000] }   // Upper range value
//                                             ]},
//                                             '3-4',
//                                             {
//                                                 $cond: [
//                                                     { $and: [
//                                                         { $gte: [__year, 4] }, // Lower range value
//                                                         { $lt: [__year, 5] }   // Upper range value
//                                                     ]},
//                                                     '4-5',
//                                                     {
//                                                         $cond: [
//                                                             { $and: [
//                                                                 { $gte: [__year, 5] }, // Lower range value
//                                                                 { $lt: [__year, 6] }   // Upper range value
//                                                             ]},
//                                                             '5-6',
//                                                             {
//                                                                 $cond: [
//                                                                     { $and: [
//                                                                         { $gte: [__year, 6] }, // Lower range value
//                                                                         { $lt: [__year, 7] }   // Upper range value
//                                                                     ]},
//                                                                     '6-7',
//                                                                     {
//                                                                         $cond: [
//                                                                             { $and: [
//                                                                                 { $gte: [__year, 7] }, // Lower range value
//                                                                                 { $lt: [__year, 8] }   // Upper range value
//                                                                             ]},
//                                                                             '7-8',
//                                                                             {
//                                                                                 $cond: [
//                                                                                     { $and: [
//                                                                                         { $gte: [__year, 8] }, // Lower range value
//                                                                                         { $lt: [__year, 9] }   // Upper range value
//                                                                                     ]},
//                                                                                     '8-9',
//                                                                                     {
//                                                                                         $cond: [
//                                                                                             { $and: [
//                                                                                                 { $gte: [__year, 9] }, // Lower range value
//                                                                                                 { $lt: [__year, 10] }   // Upper range value
//                                                                                             ]},
//                                                                                             '9-10',
//                                                                                             {
//                                                                                                 $cond: [
//                                                                                                     { $ne: [__year, 'not available'] }, // Check if the field is not 'not available'
//                                                                                                     '$data',                             // Group by the field value if not 'not available'
//                                                                                                     'Not Available'                       // Group label for 'not available'
//                                                                                                 ]
//                                                                                             }
//                                                                                         ]
//                                                                                     }
//                                                                                 ]
//                                                                             }
//                                                                         ]
//                                                                     }
//                                                                 ]
//                                                             }
//                                                         ]
//                                                     }
//                                                 ]
//                                             }
//                                         ]
//                                     }
//                                 ]
//                             }
//                         ]
//                     }
//                     ]
//                   }
//                 ]
//               },
//               count: { $sum: 1 } // Count the documents in each group
//             }
//         }
//     ]
// }
