// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function substitution(input, alphabet, encode = true) {
    //check that alphabet is given an exactly 26 characters long
    if (!alphabet || alphabet.length !== 26) return false;
    //check that each character is unique
    if ((input, alphabet)) {
      const temp = [];
      for (let i = 0; i < alphabet.length; i++) {
        if (temp.includes(alphabet[i])) {
          return false;
        } else {
          temp.push(alphabet[i]);
        }
      }
    }
    input = input.toLowerCase();
    let result = "";
    // ENCODE
    if (encode) {
      let keyAlphabet = [];
      for (let k = 0; k < alphabet.length; k++) {
        keyAlphabet.push(alphabet[k]);
      }
      let numsArray = [];
      for (let j = 0; j < input.length; j++) {
        let currentLetter = input[j];
        if (currentLetter === " ") {
          numsArray.push(currentLetter);
        } else {
          const letterValues = [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
          ];
          for (let h = 0; h < letterValues.length; h++) {
            let matching = letterValues[h];
            if (currentLetter === matching) {
              numsArray.push(h);
            }
          }
        }
      }
      for (let i = 0; i < numsArray.length; i++) {
        if (numsArray[i] === " ") {
          result += numsArray[i];
        } else {
          result += keyAlphabet[numsArray[i]];
        }
      }
    } else {
      //DECODE
      let keyAlphabet = [];
      for (let k = 0; k < alphabet.length; k++) {
        keyAlphabet.push(alphabet[k]);
      }
      let numsArray = [];
      for (let j = 0; j < input.length; j++) {
        let currentLetter = input[j];
        if (currentLetter === " ") {
          numsArray.push(currentLetter);
        } else {
          for (let h = 0; h < keyAlphabet.length; h++) {
            if (keyAlphabet[h] === currentLetter) {
              numsArray.push(h);
            }
          }
        }
      }
      for (let g = 0; g < numsArray.length; g++) {
        if (numsArray[g] === " ") {
          result += numsArray[g];
        } else {
          const letterValues = [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
          ];
          result += letterValues[numsArray[g]];
        }
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
