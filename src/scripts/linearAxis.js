import * as d3 from "d3";

export const drawLinearAxis = lineArg => {
  const scale = d3
    .scaleLinear()
    .domain([lineArg.domainMin, lineArg.domainMax])
    .range([lineArg.rangeMin, lineArg.rangeMax]);

  const group = lineArg.parentGroup.append("g");

  let axis;

  if (lineArg.type === "bar") {
    axis = d3.axisBottom(scale);
    group.attr("transform", `translate(0,${lineArg.height})`);
  } else {
    axis = d3.axisLeft(scale);
  }

  group.call(axis);

  return scale;
};
