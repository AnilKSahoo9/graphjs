const drawLinearAxis = (
    type,
    domainMin,
    domainMax,
    rangeMin,
    rangeMax,
    parentGroup,
    height
) => {
    const scale = d3
        .scaleLinear()
        .domain([domainMin, domainMax])
        .range([rangeMin, rangeMax]);

    const group = parentGroup.append("g");

    let axis;

    if (type === "bar") {
        axis = d3.axisBottom(scale);
        console.log(type);
        group.attr("transform", `translate(0,${height})`);
    } else {
        axis = d3.axisLeft(scale);
    }
    group.call(axis);

    return scale;
};

const drawBandAxis = (
    type,
    domainArr,
    rangeMin,
    rangeMax,
    parentGroup,
    height
) => {
    const scale = d3
        .scaleBand()
        .domain(domainArr)
        .range([rangeMin, rangeMax])
        .paddingInner(0.5)
        .paddingOuter(0.5);

    const group = parentGroup
        .append("g");

    let axis;

    if (type === "bar") {
        axis = d3.axisLeft(scale);
    } else {
        axis = d3.axisBottom(scale);
        group.attr("transform", `translate(0,${height})`);
    }

    group.call(axis);

    return scale;
};