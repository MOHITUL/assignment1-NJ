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

//console.log(validateUsername("rahim islam"));


//4: Dhaka CNG Fare Meter

function getCngFare(distance, isNight = false, 
    waitingMinutes = 0){
        let fare = 50;
         if(distance > 2){
            fare = fare + (distance - 2) * 15;
         }

         fare = fare + waitingMinutes * 2;
         if(isNight){
            fare = fare + fare * 0.2;
         }
return fare;
}

console.log(getCngFare(5, true, 10));
