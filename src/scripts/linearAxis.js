const drawLinearAxis = (arg) => {

    const scale = d3
        .scaleLinear()
        .domain([arg.domainMin, arg.domainMax])
        .range([arg.rangeMin, arg.rangeMax]);

    const group = arg.parentGroup.append("g");

    let axis;

    if (arg.type === "bar") {
        axis = d3.axisBottom(scale);
        group.attr("transform", `translate(0,${arg.height})`);
    } else {
        axis = d3.axisLeft(scale);
    }

    group.call(axis);

    return scale;
};