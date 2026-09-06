//1: Value Detective

function describeValue(val) {
    const valueType = typeof val;
    const truthiness = val ? "truthy" : "falsy";
    return `${valueType} | ${truthiness}`;
}
//console.log(describeValue(25));


//2: Bangladesh Weekend Machine

function getDayType(day) {
    const formattedDay = day.toLowerCase();

    switch (formattedDay) {
        case "friday":
        case "saturday":
            return "Weekend";
        
            case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
        
            default:
            return "Invalid Day";
    }
}

//console.log(getDayType("friday"));
