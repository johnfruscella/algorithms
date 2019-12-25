function myReplace(str, before, after) {
    str = str.split(" ");
    let searchword = str.indexOf(before)
    if (searchword > -1) {
         str.splice(searchword,1,after);
         str.join();
    }
    // console.log(after1);
    console.log(str);
    
    
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  