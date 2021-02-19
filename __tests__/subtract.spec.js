const subtract = require("../subtract");

describe("subtract", () => {
  it("should subtract two numbers", () => {
    expect(subtract(5,2)).toBe(3);
  });
});
