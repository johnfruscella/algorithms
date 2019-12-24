// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.


function diffArray(arr1, arr2) {
   let newArr = [];
   let arr3 = arr1.concat(arr2).sort();

   for (let i =0; i< arr3.length; i++) {
       if (arr3[i] !== arr3[i+1] && arr3[i] !== arr3[i-1]){
           newArr.push(arr3[i]);   
       }

    }
    console.log(newArr);
     return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); 
  diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) 

