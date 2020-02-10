export const floor = (floor = 0, action: any) => {
  switch (action.type) {
    case "NEXTFLOOR":
      return floor + 1;
    case "PREVIOUSFLOOR":
      return floor - 1;
    case "SETFLOOR":
      floor = action.payload;
      return floor;
    default:
      return floor;
  }
};
