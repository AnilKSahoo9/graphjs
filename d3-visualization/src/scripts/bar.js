const drawBar = (
    xScale,
    yScale,
    parentGroup,
    data,
    xScaleAttrName,
    yScaleAttrName,
    barWidth,
    barColor) => {

    const rects = parentGroup.selectAll("rect").data(data);

    rects
        .enter()
        .append("rect")
        .attr("y", d => yScale(d[yScaleAttrName]))
        .attr("height", barWidth)
        .attr("x", 0)
        .attr("width", d => xScale(d[xScaleAttrName]))
        .attr("fill", barColor);
}