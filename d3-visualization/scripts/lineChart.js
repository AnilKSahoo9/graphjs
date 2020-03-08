const svg2 = d3.select(".draw")
    .append("svg")
    .attr("width", 600)
    .attr("height", 600);

const margin2 = { top: 20, right: 20, bottom: 100, left: 100 };
const graphWidth2 = 600 - margin2.left - margin2.right;
const graphHeight2 = 600 - margin2.top - margin2.bottom;

const graph2 = svg2
    .append("g")
    .attr("width", graphWidth2)
    .attr("height", graphHeight2)
    .attr("transform", `translate(${margin2.left}, ${margin2.top})`);

  //create axes group
const xAxisGroup2 = graph2.append("g")
    .attr("class", "x-axis")
    .attr("transform", "translate(0, " + graphHeight2 + ")");
const yAxisGroup2 = graph2.append("g").attr("class", "y-axis");

d3.json('travel.json').then(data => {

//create scales
const x = d3.scaleBand()
    .domain(data.map(d => d.year))
    .range([0, graphWidth2]);
const y = d3.scaleLinear()
    .domain([0,d3.max(data, d => d.distance)])
    .range([graphHeight2, 0]);

//d3 path generator
const line = d3
  .line()
  .x(function(d) {
    return x(d.year);
  })
  .y(function(d) {
    return y(d.distance);
  });

//create line path element
const path = graph2.append("path");

//update path data
path
    .data([data])
    .attr("fill", "none")
    .attr("stroke", "#00bfa5")
    .attr("stroke-width", 2)
    .attr("d", line);

//create axes
const xAxis = d3
    .axisBottom(x)
    .ticks(7)
    .tickFormat(d => d);

const yAxis = d3
    .axisLeft(y)
    .ticks(7)
    .tickFormat(d => d + "km");

//call axes
xAxisGroup2.call(xAxis);
yAxisGroup2.call(yAxis);

//rotate axis text
xAxisGroup2
    .selectAll("text")
    .attr("transform", "rotate(0)")
    .attr("text-anchor", "end");
})