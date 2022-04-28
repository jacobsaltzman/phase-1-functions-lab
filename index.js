// Code your solution in this file!
function distanceFromHqInBlocks(location){
    if (location>=42){
        return location - 42;
    }
    else{
        return 42 - location;
    }
}

function distanceFromHqInFeet(location){
    const feet = distanceFromHqInBlocks(location) * 264;
    return feet;
}

function distanceTravelledInFeet(start, destination){
    if (start >= destination){
        return (start - destination) * 264;
    }
    else{
        return (destination - start) * 264;
    }
}

function calculatesFarePrice(start, destination){
    const travelledFeet = distanceTravelledInFeet(start, destination);
        if (travelledFeet > 2500){
            return 'cannot travel that far';
        }
        if (travelledFeet < 400){
            return 0;
        }
        else if (travelledFeet < 2000){
            return (travelledFeet - 400) * .02;
        }
        else if (travelledFeet < 2,500){
            return 25;
        }
        
    }
