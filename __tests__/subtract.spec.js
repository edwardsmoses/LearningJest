import { expect, it } from "@jest/globals";
const subtract = require("../subtract");

describe("subtract", () => {
  it("should subtract two numbers", () => {
    const actual = subtract(5, 3);
    expect(actual).toBe(2);
  });
});
