function steamrollArray(arr) {
    var arr1 = [];
    flattenNested(arr);

    function flattenNested(arr) {
        arr.forEach(function (arr2){
            if (!Array.isArray(arr2)){
                arr1.push(arr2);
            }else {
                flattenNested(arr2);
            }
        });
    }
    console.log(arr1);
    return arr1;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);