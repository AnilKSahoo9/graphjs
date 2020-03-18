Chart.defaults.global.defaultFontFamily = 'Calibri';
Chart.defaults.global.defaultFontSize = 20;
Chart.defaults.global.defaultFontColor = 'Purple';

//Creating a Bar Chart
let drawBar = document.getElementById("barChart").getContext("2d");
let barChart = new Chart(drawBar, {
    type: 'bar',
    responsive: 'false',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            label: 'No Of Mobile Users of Jio Infocom Added',
            data: [239087, 118926, 98430, 443092, 332198, 45000, 238954, 126703, 390872, 409285, 150936, 551278],
            backgroundColor: 'blue'
            //borderColor: 'red'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Telecom data',
            fontSize: 50
        }
    }
});

//Creating a Line Chart 
let drawLine = document.getElementById("lineChart").getContext('2d');
let lineChart = new Chart(drawLine, {
    type: 'line',
    responsive: 'false',
    data: {
        labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
        datasets: [{
            label: 'Expenditure of a student weekly',
            data: [170, 120, 450, 390, 220, 670, 800],
            backgroundColor: 'violet',
            borderColor: 'blue',
            //showLine: 'false'
            borderWidth: 6,
            //borderCapStyle:
            fill: 'false'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Expenditure Data',
            fontSize: 50
        }
    }
});