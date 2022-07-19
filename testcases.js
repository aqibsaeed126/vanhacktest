const chai = require("chai");
const {equal} = chai.assert;
chai.config.truncateThreshold = 0;

describe("colorizeWordle", () => {
  describe("non-duplicates", () => {
    it("should detect no letters matching", () => {
      equal(colorizeWordle("alpha", "truck"), "BBBBB");
    });
    it("should detect all letters matching", () => {
      equal(colorizeWordle("truck", "truck"), "GGGGG");
    });
    it("should detect one letter not matching", () => {
      equal(colorizeWordle("truck", "track"), "GGBGG");
    });
    it("should detect one letter not matching in a different spot", () => {
      equal(colorizeWordle("track", "crack"), "BGGGG");
    });
  });
  describe("on duplicates", () => {
    it("should only report the first two of three letters as present in the result", () => {
      equal(colorizeWordle("mamma", "maxim"), "GGYBB");
    });
    it("should handle guess and hidden sharing two letters at different locations", () => {
      equal(colorizeWordle("reeks", "elder"), "YYYBB");
    });
    it("should work with a duplicate in guess that appears once at the same location in hidden", () => {
      equal(colorizeWordle("preen", "alien"), "BBBGG");
    });
    it("should work with a duplicate in guess that appears once elsewhere in hidden", () => {
      equal(colorizeWordle("alpha", "tacks"), "YBBBB");
    });
    it("should report only the first of two duplicate letters in guess when one is in result with matching location", () => {
      equal(colorizeWordle("toast", "burnt"), "BBBBG");
    });
    it("should report only the first of three duplicate letters in guess when one is in result without matching location", () => {
      equal(colorizeWordle("iiwis", "swift"), "YBYBY");
    });
    it("should detect no letters matching", () => {
      equal(colorizeWordle("soils", "abbey"), "BBBBB");
    });
    it("should detect all letters matching", () => {
      equal(colorizeWordle("toast", "toast"), "GGGGG");
    });
  });
});
