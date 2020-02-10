//Internals
import { numToFloor, NUMBER_OF_FLOORS, numToFloorName } from "./Floor";

test("numToFloor should reset after NUMBER_OF_FLOORS", () => {
  expect(numToFloor(0)).toBe(numToFloor(NUMBER_OF_FLOORS));
});

test("numToFloor should reset after 0", () => {
  expect(numToFloor(-1)).toBe(numToFloor(NUMBER_OF_FLOORS - 1));
});

test("numToFloor at negative NUMBER_OF_FLOORS should be 0", () => {
  expect(numToFloor(-NUMBER_OF_FLOORS)).toBe(numToFloor(0));
});

test("numToName should reset after NUMBER_OF_FLOORS", () => {
  expect(numToFloorName(0)).toBe(numToFloorName(NUMBER_OF_FLOORS));
});

test("numToName should reset after 0", () => {
  expect(numToFloorName(-1)).toBe(numToFloorName(NUMBER_OF_FLOORS - 1));
});

test("numToName at negative NUMBER_OF_FLOORS should be 0", () => {
  expect(numToFloorName(-NUMBER_OF_FLOORS)).toBe(numToFloorName(0));
});
