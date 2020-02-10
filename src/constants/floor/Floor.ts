export enum Floors {
  MB1 = "./floors/MB1.png",
  MB2 = "./floors/MB2.png",
  Gables = "./floors/Gables.png",
  Picken = "./floors/Picken.png",
  MCC = "./floors/MCC.png"
}
export const NUMBER_OF_FLOORS = 5;

function convertToBounded(value: number, maxValue: number) {
  if (value >= 0) {
    return value % maxValue;
  }
  return ((value % maxValue) + maxValue) % maxValue;
}

export function numToFloor(floorNumber: number) {
  floorNumber = convertToBounded(floorNumber, NUMBER_OF_FLOORS);
  return Object.values(Floors)[floorNumber];
}

export function numToFloorName(floorNumber: number) {
  floorNumber = convertToBounded(floorNumber, NUMBER_OF_FLOORS);
  return Object.keys(Floors)[floorNumber];
}
