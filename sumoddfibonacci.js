function sumFibs(num) {
    let prevNumber = 0,
        currNumber = 1,
        result = 0;

    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }

        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }
    console.log(result);
    return result;
}


sumFibs(4);
sumFibs(200);
  //Fibonacci sequence : 0,1,1,2,3,5,8,13,21,,34,55,89,144