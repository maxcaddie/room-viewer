//Internals
import { numToFloor, NUMBER_OF_FLOORS, numToFloorName } from "./Floor";

test("numToFloor should reset after NUMBER_OF_FLOORS", () => {
  expect(numToFloor(0)).toBe(numToFloor(NUMBER_OF_FLOORS));
});

test("numToName should reset after NUMBER_OF_FLOORS", () => {
  expect(numToFloorName(0)).toBe(numToFloorName(NUMBER_OF_FLOORS));
});
