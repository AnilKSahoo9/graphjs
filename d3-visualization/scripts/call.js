//let line = document.getElementsByClassName('canvas');
let lineData = {
    "type": "line",
    "value": [{
            "xAxisLabel": "Chicken",
            "yAxisLabel": 900
        },
        {
            "xAxisLabel": "Mutton",
            "yAxisLabel": 200
        },
        {
            "xAxisLabel": "Fish",
            "yAxisLabel": 250
        },
        {
            "xAxisLabel": "Egg",
            "yAxisLabel": 500
        },
        {
            "xAxisLabel": "Veg",
            "yAxisLabel": 1500
        },
        {
            "xAxisLabel": "Veg kimma",
            "yAxisLabel": 1900
        },
        {
            "xAxisLabel": "Veg kimma butter",
            "yAxisLabel": 1200
        }
    ]
}

let lineChart = draw(lineData);

//let bar = document.getElementsByClassName('paint');
let barData = {
    "type": "bar",
    "value": [{
            "xAxisLabel": 2010,
            "yAxisLabel": 400
        },
        {
            "xAxisLabel": 2011,
            "yAxisLabel": 200
        },
        {
            "xAxisLabel": 2012,
            "yAxisLabel": 700
        },
        {
            "xAxisLabel": 2013,
            "yAxisLabel": 500
        },
        {
            "xAxisLabel": 2014,
            "yAxisLabel": 1500
        },
        {
            "xAxisLabel": 2015,
            "yAxisLabel": 1900
        },
        {
            "xAxisLabel": 2016,
            "yAxisLabel": 1200
        }
    ]
}

let barChart = draw(barData);