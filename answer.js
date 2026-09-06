//1: Value Detective

function describeValue(val) {
    const valueType = typeof val;
    const truthiness = val ? "truthy" : "falsy";
    return `${valueType} | ${truthiness}`;
}
//console.log(describeValue(25));