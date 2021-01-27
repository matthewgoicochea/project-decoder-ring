// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift > 25 || shift < -25) return false;
    let result = " ";
    let toChange = [];
    let newValues = [];
    input = input.toLowerCase();
    //encode
    if (encode) {
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
      const alphabetByletter = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26,
        " ": " ",
      };
      const alphabetByNum = {
        1: "a",
        2: "b",
        3: "c",
        4: "d",
        5: "e",
        6: "f",
        7: "g",
        8: "h",
        9: "i",
        10: "j",
        11: "k",
        12: "l",
        13: "m",
        14: "n",
        15: "o",
        16: "p",
        17: "q",
        18: "r",
        19: "s",
        20: "t",
        21: "u",
        22: "v",
        23: "w",
        24: "x",
        25: "y",
        26: "z",
        " ": " ",
      };
      //change to nums array
      for (let i = 0; i < input.length; i++) {
        if (!standardAlphabet.includes(input[i])) {
          toChange.push(input[i]);
        } else {
          for (let key in alphabetByletter) {
            let var1 = alphabetByletter[input[i]];
            if (key === input[i]) {
              toChange.push(var1);
            }
          }
        }
      }
      //add shift to nums array
      for (let k = 0; k < toChange.length; k++) {
        let value = toChange[k];
        if (typeof value === "number") {
          newValues.push(value + shift);
        } else {
          newValues.push(value);
        }
      }
      // assign num array new chars
      for (j = 0; j < newValues.length; j++) {
        let currentValue = newValues[j];
        if (currentValue > 26) {
          currentValue = currentValue - 26;
        }
        if (typeof currentValue === "number") {
          //match newValue to array key then return value at that array key
          for (let key in alphabetByNum) {
            if (key === currentValue.toString()) {
              result += alphabetByNum[currentValue];
            }
          }
        } else {
          result += currentValue;
        }
      }
    } else {
      //decode
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
      const alphabetByletter = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26,
        " ": " ",
      };
      const alphabetByNum = {
        1: "a",
        2: "b",
        3: "c",
        4: "d",
        5: "e",
        6: "f",
        7: "g",
        8: "h",
        9: "i",
        10: "j",
        11: "k",
        12: "l",
        13: "m",
        14: "n",
        15: "o",
        16: "p",
        17: "q",
        18: "r",
        19: "s",
        20: "t",
        21: "u",
        22: "v",
        23: "w",
        24: "x",
        25: "y",
        26: "z",
        " ": " ",
      };
      //turn input into numArray
      for (let i = 0; i < input.length; i++) {
        if (!standardAlphabet.includes(input[i])) {
          toChange.push(input[i]);
        } else {
          for (let key in alphabetByletter) {
            let var1 = alphabetByletter[input[i]];
            if (key === input[i]) {
              toChange.push(var1);
            }
          }
        }
      }
      //remove shift from nums array
      for (let k = 0; k < toChange.length; k++) {
        let value = toChange[k];
        if (typeof value === "number") {
          newValues.push(value - shift);
        } else {
          newValues.push(value);
        }
      }
      // assign num array new chars
      for (j = 0; j < newValues.length; j++) {
        let currentValue = newValues[j];
        if (currentValue < 0) {
          currentValue = currentValue + 26;
        }
        if (typeof currentValue === "number") {
          //match newValue to array key then return value at that array key
          for (let key in alphabetByNum) {
            if (key === currentValue.toString()) {
              result += alphabetByNum[currentValue];
            }
          }
        } else {
          result += currentValue;
        }
      }
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
