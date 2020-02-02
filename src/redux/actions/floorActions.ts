export function changeFloor() {
  return {
    type: "CHANGEFLOOR"
  };
}

export function setFloor(floor: number) {
  return {
    type: "SETFLOOR",
    payload: floor
  };
}
