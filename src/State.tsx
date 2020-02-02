//Internals
import { floor } from "./redux/reducers/floorReducer";

//externals

//@ts-ignore
import { createStore, compose } from "redux";
import { changeFloor } from "./redux/actions/floorActions";

export const store = createStore(
  floor,
  compose((window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())
);

store.dispatch(changeFloor());
