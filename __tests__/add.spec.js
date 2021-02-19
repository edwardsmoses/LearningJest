const add = require("../add");

describe("add", () => {
  it("should add two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("testing add - result should be negative", () => {
    const actualResult = add(-2, 1);
    expect(actualResult).toBe(-1);
  });

  it.skip("testing add", () => {
    const actualResult = add(1, 3);
    expect(actualResult).toBe(4);
  });
});
