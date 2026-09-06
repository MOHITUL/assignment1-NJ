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


//3: Username Gatekeeper

function validateUsername(username) {
    if (username.length <4 )
    {
        return "Too Short";
    }
    if (username.includes(" "))
    {
        return "No Space Allowed";
    }

    if(username.toLowerCase().includes("admin")){
        return "Reserved Word";
    }
    return "Available";
}

console.log(validateUsername("rahim islam"));