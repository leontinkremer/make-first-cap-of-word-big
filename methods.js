let str = "wOrK";
const strToLowerCase = str.toLowerCase(); // work
const firstLetterOfStr = str.charAt(0); // w
const firstLetterOfStrToUpperCase = firstLetterOfStr.toUpperCase(); // W
const strFromSecondLetter = strToLowerCase.slice(1); //ork
const strFirsCapBig = firstLetterOfStrToUpperCase + strFromSecondLetter;
console.log(strFirsCapBig);
