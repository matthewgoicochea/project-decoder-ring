// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function polybius(input, encode = true) {
    let result = "";
    if (encode) {
      input = input.toLowerCase();
      const polybiusSquareByLetter = {
        a: 11,
        b: 21,
        c: 31,
        d: 41,
        e: 51,
        f: 12,
        g: 22,
        h: 32,
        i: 42,
        j: 42,
        k: 52,
        l: 13,
        m: 23,
        n: 33,
        o: 43,
        p: 53,
        q: 14,
        r: 24,
        s: 34,
        t: 44,
        u: 54,
        v: 15,
        w: 25,
        x: 35,
        y: 45,
        z: 55,
        " ": " ",
      };
      for (let i = 0; i < input.length; i++) {
        const currentValue = input[i];
        for (matchingValue in polybiusSquareByLetter) {
          let value = polybiusSquareByLetter[matchingValue];
          if (currentValue === matchingValue) {
            result += value;
          }
        }
      }
    } else {
      const polybiusSquareByNum = {
        11: "a",
        21: "b",
        31: "c",
        41: "d",
        51: "e",
        12: "f",
        22: "g",
        32: "h",
        42: "(i/j)",
        52: "k",
        13: "l",
        23: "m",
        33: "n",
        43: "o",
        53: "p",
        14: "q",
        24: "r",
        34: "s",
        44: "t",
        54: "u",
        15: "v",
        25: "w",
        35: "x",
        45: "y",
        55: "z",
        " ": " ",
      };
      let pairStart = 0;
      let count = 0;
      input = input.toLowerCase();
      for (let k = 0; k < (input.length - count) / 2; k++) {
        if (input[k] === " ") count++;
      }
      if ((input.length - count) % 2 === 1) return false;
      for (let i = 0; i < input.length; i++) {
        const currentValue = input.substr(pairStart, 2);
        if (currentValue.includes(" ")) {
          pairStart = pairStart + 1;
          result += " ";
        } else {
          pairStart = pairStart + 2;
          for (key in polybiusSquareByNum) {
            let value = polybiusSquareByNum[currentValue];
            if (currentValue === key) {
              result += value;
            }
          }
        }
      }
    }
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
