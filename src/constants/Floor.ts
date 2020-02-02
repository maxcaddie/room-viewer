export enum Floors {
  floor1 = "./floors/MB2.jpg",
  floor2 = "./floors/MB1.jpg"
}
export const NUMBER_OF_FLOORS = 2;

export function numToFloor(floorNumber: number) {
  while (floorNumber >= NUMBER_OF_FLOORS) {
    floorNumber = floorNumber - NUMBER_OF_FLOORS;
  }
  console.log(Object.keys(Floors)[floorNumber]);
}
