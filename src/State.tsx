//externals

//@ts-ignore
import { createStore, compose } from "redux";

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

export const store = createStore(
  floor,
  compose((window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())
);

store.subscribe(() => console.log(store.getState()));

store.dispatch(changeFloor());
