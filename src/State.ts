//externals

//@ts-ignore
import { createStore } from "redux";

//Actions
export function changeFloor() {
  return {
    type: "CHANGEFLOOR"
  };
}

//Reducer
const floor = (state = 0, action: any) => {
  switch (action.type) {
    case "CHANGEFLOOR":
      state = state + 1;
      return state;

    default:
      return state;
  }
};

export let store = createStore(floor);

store.subscribe(() => console.log(store.getState()));

store.dispatch(changeFloor());
