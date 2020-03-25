const drawPie = (pieData, paths, labels, parentGroup, xAxisLabel, color) => {

    const arc = parentGroup.selectAll(".arc")
        .data(pieData)
        .enter()
        .append("g")
        .attr("class", "arc");

    arc.append("path").attr("d", paths).attr("fill", color);

    console.log(arc);

    arc.append("text")
        .attr("text-anchor", "middle")
        .attr("transform", function (d) {
            return "translate(" + (labels.centroid(d)) + ")";
        })
        .text(xAxisLabel);
}