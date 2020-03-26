const drawColumn = (columnArg) => {

    const xScale = drawBandAxis({
        type: columnArg.type,
        domainArr: columnArg.data.map(d => d.xAxisLabel),
        rangeMin: 0,
        rangeMax: columnArg.graphWidth,
        parentGroup: columnArg.graph,
        height: columnArg.graphHeight
    });
    const yScale = drawLinearAxis({
        type: columnArg.type,
        domainMin: 0,
        domainMax: d3.max(columnArg.data, d => d.yAxisLabel),
        rangeMin: columnArg.graphHeight,
        rangeMax: 0,
        parentGroup: columnArg.graph,
        height: columnArg.graphHeight
    });

    const rects = columnArg.graph.selectAll("rect").data(columnArg.data);

    rects
        .enter()
        .append("rect")
        .attr("width", xScale.bandwidth())
        .attr("height", d => columnArg.graphHeight - yScale(d[columnArg.yScaleAttrName]))
        .attr("fill", columnArg.columnColor)
        .attr("x", d => xScale(d[columnArg.xScaleAttrName]))
        .attr("y", d => yScale(d[columnArg.yScaleAttrName]));
};