import { edgeListGen } from "./edgelistGen.js";
describe("testing edgelistgen", () => {
  test("out of bounds", () => {
    expect(() => edgeListGen([20, 30])).toThrow("value out of bounds of board");
  });
  test("value", () => {
    expect(edgeListGen([0, 0])).toEqual([
      [1, 2],
      [2, 1],
    ]);
  });
});
