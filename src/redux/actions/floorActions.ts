export function nextFloor() {
  return {
    type: "NEXTFLOOR"
  };
}

export function prevFloor() {
  return {
    type: "PREVIOUSFLOOR"
  };
}

export function setFloor(floor: number) {
  return {
    type: "SETFLOOR",
    payload: floor
  };
}
