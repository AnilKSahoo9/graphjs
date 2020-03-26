const drawLine = (lineArg) => {

    const xScale = drawBandAxis({
        type: lineArg.type,
        domainArr: lineArg.data.map(d => d.xAxisLabel),
        rangeMin: 0,
        rangeMax: lineArg.graphWidth,
        parentGroup: lineArg.graph,
        height: lineArg.graphHeight
    });

    const yScale = drawLinearAxis({
        type: lineArg.type,
        domainMin: 0,
        domainMax: d3.max(lineArg.data, d => d.yAxisLabel),
        rangeMin: lineArg.graphHeight,
        rangeMax: 0,
        parentGroup: lineArg.graph,
        height: lineArg.graphHeight
    });

    const line = d3.line()
        .x(function (d) {
            return xScale(d[lineArg.xScaleAttrName]);
        })
        .y(function (d) {
            return yScale(d[lineArg.yScaleAttrName]);
        });

    const path = lineArg.graph.append("path");

    path
        .data([lineArg.data])
        .attr("fill", "none")
        .attr("stroke", lineArg.lineColor)
        .attr("stroke-width", 5)
        .attr("class", "line")
        .attr("d", line);
};