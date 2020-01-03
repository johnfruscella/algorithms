function translatePigLatin(str) {

    var firstPosition = findFirstVowelPosition(str);
    if (firstPosition > 0) {
        return str.slice(firstPosition) + str.slice(0, firstPosition) + "ay";

    }
    return str + "way";
  }
  

  function findFirstVowelPosition(str) {
      for (let i = 0; i < str.length; i++) {
          if ("aeiou".indexOf(str[i]) !== -1){
              return i;
          }
      }
  }
  console.log(translatePigLatin("consonant"));