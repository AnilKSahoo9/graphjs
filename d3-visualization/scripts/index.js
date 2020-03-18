const draw = (data) => {
    const margin = {
        top: 10,
        right: 10,
        bottom: 30,
        left: 100
    };
    const graphWidth = 640 - margin.left - margin.right;
    const graphHeight = 560 - margin.top - margin.bottom;
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

    const yScale = drawLinearAxis(
        0,
        d3.max(data.value, d => d.orders),
        graphHeight,
        0,
        graph
    );
    const xScale = drawBandAxis(
        data.value.map(d => d.name),
        0,
        graphWidth,
        graph,
        graphHeight
    );
    switch (data.type) {
        case "line":
            drawLine(xScale, yScale, data.value, "name", "orders", graph);
            break;
        case "bar":
            drawBar(
                xScale,
                yScale,
                graph,
                data.value,
                "name",
                "orders",
                graphHeight,
                xScale.bandwidth
            );

        default:
            break;
    }
};
//drawLine(xScale, yScale, data.value, "name", "orders", graph);
// d3.json("data/travel.json").then(data => {
//     const margin = {
//         top: 10,
//         right: 10,
//         bottom: 30,
//         left: 100
//     };
//     const graphWidth = 800 - margin.left - margin.right;
//     const graphHeight = 500 - margin.top - margin.bottom;
//     const svg = d3
//         .select(".canvas")
//         .append("svg")
//         .attr("width", graphWidth + margin.left + margin.right)
//         .attr("height", graphHeight + margin.top + margin.bottom);

//     const graph = svg
//         .append("g")
//         .attr("width", graphWidth)
//         .attr("height", graphHeight)
//         .attr("transform", `translate(${margin.left}, ${margin.top})`);

//     const yScale = drawLinearAxis(
//         0,
//         d3.max(data, d => d.distance),
//         graphHeight,
//         0,
//         graph
//     );
//     const xScale = drawBandAxis(
//         data.map(d => d.year),
//         0,
//         graphWidth,
//         graph,
//         graphHeight
//     );

//     drawLine(xScale, yScale, data, "year", "distance", graph);
// });