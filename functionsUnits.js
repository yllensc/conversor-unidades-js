function convTemperature(celsius){
    return (celsius * 9/5) + 32
}

function convDistance(meters){
    return meters*3,28084
}

function convWeight(kilos){
    return kilos*2.20462
}

export default  {
    convTemperature,
    convDistance,
    convWeight
};