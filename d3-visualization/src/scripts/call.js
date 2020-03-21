let lineData = {
    "type": "line",
    "top": 20,
    "bottom": 80,
    "left": 30,
    "right": 10,
    "width": 800,
    "height": 700,
    "inLabel": 10,
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

let barData = {
    "type": "bar",
    "top": 20,
    "bottom": 80,
    "left": 30,
    "right": 10,
    "width": 800,
    "height": 700,
    "inLabel": 10,
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
            "yAxisLabel": 1100
        },
        {
            "xAxisLabel": 2016,
            "yAxisLabel": 1200
        }
    ]
}

let barChart = draw(barData);

let pieData = {
    "type": "pie",
    "top": 350,
    "bottom": 80,
    "left": 350,
    "right": 10,
    "width": 800,
    "height": 700,
    "inLabel": 10,

    "value": [{
            "xAxisLabel": "Chicken",
            "yAxisLabel": 900
        },
        {
            "xAxisLabel": "Mutton",
            "yAxisLabel": 1400
        },
        {
            "xAxisLabel": "Fish",
            "yAxisLabel": 500
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

let pieChart = draw(pieData);