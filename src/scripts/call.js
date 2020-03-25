let lineData = {
    "type": "line",
    "top": 20,
    "bottom": 80,
    "left": 30,
    "right": 10,
    "width": 640,
    "height": 560,
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

let columnData = {
    "type": "column",
    "top": 20,
    "bottom": 80,
    "left": 30,
    "right": 10,
    "width": 600,
    "height": 500,
    "columnColor": "orange",
    "value": [{
            "xAxisLabel": 2010,
            "yAxisLabel": 750
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

let columnChart = draw(columnData);

let pieData = {
    "type": "pie",
    "top": 350,
    "bottom": 80,
    "left": 350,
    "right": 10,
    "width": 800,
    "height": 700,
    "inLabel": 130,
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

let barData = {
    "type": "bar",
    "top": 15,
    "bottom": 15,
    "left": 60,
    "right": 25,
    "width": 960,
    "height": 500,
    "barColor": "green",
    "value": [{
            "yAxisLabel": 2010,
            "xAxisLabel": 400
        },
        {
            "yAxisLabel": 2011,
            "xAxisLabel": 200
        },
        {
            "yAxisLabel": 2012,
            "xAxisLabel": 700
        },
        {
            "yAxisLabel": 2013,
            "xAxisLabel": 500
        },
        {
            "yAxisLabel": 2014,
            "xAxisLabel": 1500
        },
        {
            "yAxisLabel": 2015,
            "xAxisLabel": 1100
        },
        {
            "yAxisLabel": 2016,
            "xAxisLabel": 1200
        }
    ]
}

let barChart = draw(barData);