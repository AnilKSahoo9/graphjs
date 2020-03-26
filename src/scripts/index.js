const draw = (data) => {

    const margin = {
        top: data.top,
        right: data.right,
        bottom: data.bottom,
        left: data.left
    };

    const graphWidth = data.width - margin.left - margin.right;
    const graphHeight = data.height - margin.top - margin.bottom;

    const svg = d3
        .select(".canvas")
        .append("svg")
        .attr("width", graphWidth + margin.left + margin.right)
        .attr("height", graphHeight + margin.top + margin.bottom);

    const graph = svg
        .append("g")
        .attr("width", graphWidth)
        .attr("height", graphHeight)
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    dataSorted = data.value.sort((a, b) => d3.ascending(a.xAxisLabel, b.xAxisLabel));

    switch (data.type) {
        case "line":
            drawLine({
                type: data.type,
                data: data.value,
                "xScaleAttrName": "xAxisLabel",
                "yScaleAttrName": "yAxisLabel",
                graphHeight: graphHeight,
                graphWidth: graphWidth,
                graph: graph,
                lineColor: data.lineColor
            });
            break;

        case "column":
            drawColumn({
                graph: graph,
                data: data.value,
                "xScaleAttrName": "xAxisLabel",
                "yScaleAttrName": "yAxisLabel",
                graphHeight: graphHeight,
                graphWidth: graphWidth,
                columnColor: data.columnColor
            });
            break;

        case "pie":
            drawPie({
                pieData: data.value,
                radius: Math.min(graphWidth + margin.left + margin.right, graphHeight + margin.top + margin.bottom) / 3,
                graph: graph,
                xAxisLabels: (d, x) => data.value[x].xAxisLabel,
                inLabels: data.inLabel
            });
            break;

        case "bar":
            drawBar({
                graph: graph,
                graphHeight: graphHeight,
                graphWidth: graphWidth,
                type: data.type,
                data: data.value,
                "xScaleAttrName": "xAxisLabel",
                "yScaleAttrName": "yAxisLabel",
                barColor: data.barColor,
            });

        default:
            break;
    }
};