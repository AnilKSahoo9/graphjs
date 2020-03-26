const drawBandAxis = (bandArg) => {

    const scale = d3
        .scaleBand()
        .domain(bandArg.domainArr)
        .range([bandArg.rangeMin, bandArg.rangeMax])
        .paddingInner(0.5)
        .paddingOuter(0.5);

    const group = bandArg.parentGroup.append("g");

    let axis;

    if (bandArg.type === "bar") {
        axis = d3.axisLeft(scale);
    } else {
        axis = d3.axisBottom(scale);
        group.attr("transform", `translate(0,${bandArg.height})`);
    }

    group.call(axis);

    return scale;
};