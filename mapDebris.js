function orbitalPeriod(arr) {
    let GM = 398600.4418;
    let earthRadius = 9367.4447;
    
    arr.forEach(function(object) {
        object.orbitalPeriod = Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius + object.avgAlt, 3)/GM));
    delete object.avgAlt;});
    return arr;
    }