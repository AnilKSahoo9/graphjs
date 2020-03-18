//let line = document.getElementsByClassName('canvas');
let lineData = {
    "type": "line",
    "value": [{
            "name": "Chicken",
            "orders": 900
        },
        {
            "name": "Mutton",
            "orders": 200
        },
        {
            "name": "Fish",
            "orders": 250
        },
        {
            "name": "Egg",
            "orders": 500
        },
        {
            "name": "Veg",
            "orders": 1500
        },
        {
            "name": "Veg kimma",
            "orders": 1900
        },
        {
            "name": "Veg kimma butter",
            "orders": 1200
        }
    ]
}

let lineChart = draw(lineData);

//let bar = document.getElementsByClassName('paint');
let barData = {
    "type": "bar",
    "value": [{
            "name": "Chicken",
            "orders": 900
        },
        {
            "name": "Mutton",
            "orders": 200
        },
        {
            "name": "Fish",
            "orders": 250
        },
        {
            "name": "Egg",
            "orders": 500
        },
        {
            "name": "Veg",
            "orders": 1500
        },
        {
            "name": "Veg kimma",
            "orders": 1900
        },
        {
            "name": "Veg kimma butter",
            "orders": 1200
        }
    ]
}

let barChart = draw(barData);