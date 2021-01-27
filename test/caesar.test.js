const caesar = require("../src/caesar.js");
const expect = require("chai").expect;

// Write your tests here!
// check if function exists
describe("#caesar() Solution", () => {
  describe("Check if caesar function exists", () => {
    it("should pass if function exists", () => {
      expect(typeof caesar).to.equal("function");
    });
  });
  // caesar() error handling should return false if the shift amount is 0
  describe("Check if shift is zero", () => {
    it("should return false if the shift amount is zero", () => {
      const actual = caesar("input", 0);
      const expected = false;
      expect(actual).to.equal(expected);
    });
  });
  // caesar() error handling should return false if the shift amount is above 25
  describe("Check if shift is above 25", () => {
    it("should return false if the shift amount is above 25", () => {
      const actual = caesar("input", 26);
      const expected = false;
      expect(actual).to.equal(expected);
    });
  });
  // caesar() error handling should return false if the shift amount is less than -25
  describe("Check if shift is below -25", () => {
    it("should return false if the shift amount is below -25", () => {
      const actual = caesar("input", -26);
      const expected = false;
      expect(actual).to.equal(expected);
    });
  });
});
