//Internals
import { numToFloor, NUMBER_OF_FLOORS } from "./Floor";

it("should reset after NUMBER_OF_FLOORS", () => {
  expect(numToFloor(0)).toBe(numToFloor(NUMBER_OF_FLOORS));
});
