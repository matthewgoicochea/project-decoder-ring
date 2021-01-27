const substitution = require("../src/substitution.js");
const expect = require("chai").expect;

// Write your tests here!

describe("#substitution() Solution", () => {
  describe("Check if substitution function exists", () => {
    it("should pass if function exists", () => {
      expect(typeof substitution).to.equal("function");
    });
  });

  //substitution() should return false if the substitution alphabet is missing
  describe("Check if alphabet is given", () => {
    it("should return false if substitution alphabet is missing", () => {
      const actual = substitution("message");
      const expected = false;
      expect(actual).to.equal(expected);
    });
  });

  //substitution() should return false if the substitution alphabet is not exactly 26 characters
  describe("Check if alphabet length is correct", () => {
    it("should return false is alphabet given is not exactly 26 characters", () => {
      const actual = substitution("message", "bcdefghijklmnopqrstuvwxyz");
      const expected = false;
      expect(actual).to.equal(expected);
    });
  });

  //substitution() should return false if the substitution alphabet does not contain unique characters
  describe("Check if substitution alphabet contains duplicate characters", () => {
    it("should return false if any substitution alphabet character is repeated", () => {
      const actual = substitution("input", "abcabcabcabcabcabcabcabcyz");
      const expected = false;
      expect(actual).to.equal(expected);
    });
  });
});
