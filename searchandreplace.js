function myReplace(str, before, after) {
    str = str.split(" ");
    let searchword = str.indexOf(before)
    if (searchword > -1) {
         str.splice(searchword,1,after);
        strWithReplaced = str.join(" ");
    }
    // console.log(after1);
    console.log(strWithReplaced);
    
    
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  