const drawPie = (pieData, paths, labels, parentGroup, svg, xAxisLabel, color) => {


    const arc = parentGroup.selectAll(".arc")
        .data(pieData)
        .enter()
        .append("g")
        .attr("class", "arc");

    arc.append("path").attr("d", paths).attr("fill", color);

    console.log(arc);

    arc.append("text")
        .attr("transform", function (d) {
            return "translate(" + (labels.centroid(d)) + ")";
        })
        .text(xAxisLabel);

    // svg.append("parentGroup")
    //     .attr("transform", `translate(100,200)`)
    //     .append("text")
    //     .text("Hiiii")
    //     .attr("class", "title")
}