export enum Floors {
  MB1 = "./floors/MB1.png",
  MB2 = "./floors/MB2.png",
  Gables = "./floors/Gables.png",
  Picken = "./floors/Picken.png",
  MCC = "./floors/MCC.png"
}
export const NUMBER_OF_FLOORS = 5;

export function numToFloor(floorNumber: number) {
  floorNumber = floorNumber % NUMBER_OF_FLOORS;
  return Object.values(Floors)[floorNumber];
}

export function numToFloorName(floorNumber: number) {
  floorNumber = floorNumber % NUMBER_OF_FLOORS;
  return Object.keys(Floors)[floorNumber];
}
