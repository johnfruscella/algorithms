function spinalCase(str) {
   str = str.toLowerCase().replace(/\s/g,"-");
   console.log(str);
    return str;
  }
  
  spinalCase('This Is Spinal Tap');