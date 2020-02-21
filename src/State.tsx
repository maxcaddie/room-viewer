import { createStore, compose } from "redux";
import { nextFloor } from "./redux/actions/floorActions";
import { rootReducer } from "./redux/reducers/rootReducer";

export const store = createStore(
  rootReducer,
  compose((window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())
);

store.dispatch(nextFloor());
