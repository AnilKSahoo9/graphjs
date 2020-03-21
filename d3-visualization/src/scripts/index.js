const draw = (data) => {
    const margin = {
        top: 350,
        right: 10,
        bottom: 80,
        left: 350
    };
    const graphWidth = 800 - margin.left - margin.right;
    const graphHeight = 700 - margin.top - margin.bottom;
    const radius = Math.min(graphWidth + margin.left + margin.right, graphHeight + margin.top + margin.bottom) / 3;

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

    const color = d3.scaleOrdinal(d3["schemeSet1"]);

    const pie = d3.pie()(data.value.map(d => d.yAxisLabel));

    let path = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

    let label = d3.arc()
        .outerRadius(radius)
        .innerRadius(radius - 80);

    switch (data.type) {
        case "line":
            const yScaleLine = drawLinearAxis(
                0,
                d3.max(data.value, d => d.yAxisLabel),
                graphHeight,
                0,
                graph
            );
            const xScaleLine = drawBandAxis(
                data.value.map(d => d.xAxisLabel),
                0,
                graphWidth,
                graph,
                graphHeight
            );
            drawLine(xScaleLine, yScaleLine, data.value, "xAxisLabel", "yAxisLabel", graph);
            break;
        case "bar":
            const yScaleBar = drawLinearAxis(
                0,
                d3.max(data.value, d => d.yAxisLabel),
                graphHeight,
                0,
                graph
            );
            const xScaleBar = drawBandAxis(
                data.value.map(d => d.xAxisLabel),
                0,
                graphWidth,
                graph,
                graphHeight
            );
            drawBar(
                xScaleBar,
                yScaleBar,
                graph,
                data.value,
                "xAxisLabel",
                "yAxisLabel",
                graphHeight,
                xScaleBar.bandwidth
            );
        case "pie":
            drawPie(
                pie,
                path,
                label,
                graph,
                svg,
                (d, x) => data.value[x].xAxisLabel,
                (d, x) => color(x)
            );
        default:
            break;
    }
};