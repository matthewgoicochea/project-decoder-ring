const polybius = require("../src/polybius.js");
const expect = require("chai").expect;

// Write your tests here!

describe("#polybius() Solution", () => {
  // check if function exists
  describe("Check if polybius function exists", () => {
    it("should pass if function exists", () => {
      expect(typeof polybius).to.equal("function");
    });
  });

  // polybius() should return false if the length of all numbers is odd
  describe("Check if message length is an odd number", () => {
    it("should return false if input length of all numbers is odd", () => {
      const actual = polybius("123", false);
      const expected = false;
      expect(actual).to.equal(expected);
    });
  });
});
