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

    switch (data.type) {
        case "line":

            const yScaleLine = drawLinearAxis(
                data.type,
                0,
                d3.max(data.value, d => d.yAxisLabel),
                graphHeight,
                0,
                graph,
                graphHeight
            );

            const xScaleLine = drawBandAxis(
                data.type,
                data.value.map(d => d.xAxisLabel),
                0,
                graphWidth,
                graph,
                graphHeight
            );

            drawLine(
                xScaleLine,
                yScaleLine,
                data.value,
                "xAxisLabel",
                "yAxisLabel",
                graph);

            break;

        case "column":

            const yScaleColumn = drawLinearAxis(
                data.type,
                0,
                d3.max(data.value, d => d.yAxisLabel),
                graphHeight,
                0,
                graph,
                graphHeight
            );

            const xScaleColumn = drawBandAxis(
                data.type,
                data.value.map(d => d.xAxisLabel),
                0,
                graphWidth,
                graph,
                graphHeight
            );

            drawColumn(
                xScaleColumn,
                yScaleColumn,
                graph,
                data.value,
                "xAxisLabel",
                "yAxisLabel",
                graphHeight,
                xScaleColumn.bandwidth,
                data.columnColor
            );

            break;

        case "pie":

            const radius = Math.min(graphWidth + margin.left + margin.right, graphHeight + margin.top + margin.bottom) / 3;

            const color = d3.scaleOrdinal(d3["schemeSet1"]);

            const pie = d3.pie()(data.value.map(d => d.yAxisLabel));

            let path = d3.arc()
                .outerRadius(radius)
                .innerRadius(0);

            let label = d3.arc()
                .outerRadius(radius)
                .innerRadius(radius - data.inLabel);

            drawPie(
                pie,
                path,
                label,
                graph,
                (d, x) => data.value[x].xAxisLabel,
                (d, x) => color(x)
            );

            break;

        case "bar":

            const yScaleBar = drawBandAxis(
                data.type,
                data.value.map(d => d.yAxisLabel),
                0,
                graphHeight,
                graph,
                graphHeight
            );
            const xScaleBar = drawLinearAxis(
                data.type,
                0,
                d3.max(data.value, d => d.xAxisLabel),
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
                yScaleBar.bandwidth(),
                data.barColor
            );

        default:
            break;
    }
};