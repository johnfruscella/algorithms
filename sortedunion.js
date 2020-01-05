function uniteUnique(arr) {
    console.log(arguments.length);
    let result = arguments[0];
    for (let i  = 1; i < arguments.length; i++) {
         for (let j = 0; j < arguments[i].length; j++) {
           if (result.indexOf(arguments[i][j]) < 0) {
               result.push(arguments[i][j]);
         }
      }
      console.log(result);
      return result;	
    }
 }

 //uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
 //uniteUnique([1, 2, 3], [5, 2, 1]);
 uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]); //should return [1, 2, 3, 5, 4, 6, 7, 8]