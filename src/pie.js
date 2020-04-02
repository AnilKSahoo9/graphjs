import * as d3 from "d3";

export const drawPie = pieArg => {
  const pie = d3.pie()(pieArg.pieData.map(d => d.yAxisLabel));

  let path = d3
    .arc()
    .outerRadius(pieArg.radius)
    .innerRadius(0);

  let label = d3
    .arc()
    .outerRadius(pieArg.radius)
    .innerRadius(pieArg.radius - pieArg.inLabels);

  const color = d3.scaleOrdinal(d3["schemeSet1"]);

  const arc = pieArg.graph
    .selectAll(".arc")
    .data(pie)
    .enter()
    .append("g")
    .attr("class", "arc");

  arc
    .append("path")
    .attr("d", path)
    .attr("fill", (d, x) => color(x));

  //console.log(arc);

  arc
    .append("text")
    .attr("text-anchor", "middle")
    .attr("transform", function(d) {
      return "translate(" + label.centroid(d) + ")";
    })
    .text(pieArg.xAxisLabels);
};
