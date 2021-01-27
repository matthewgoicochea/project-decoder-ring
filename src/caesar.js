// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift > 25 || shift < -25) return false;
    if (!encode) shift *= -1;
    input = input.toLowerCase();
    let result = "";
    const standardAlphabet = [
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
    for (let letter of input) {
      if (!standardAlphabet.includes(letter)) {
        result += letter;
      } else {
        const index = standardAlphabet.findIndex((char) => char === letter);
        const cipherIndex = (index + shift + standardAlphabet.length) % standardAlphabet.length;
        const cipher = standardAlphabet[cipherIndex];
        result += cipher;
      }
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;