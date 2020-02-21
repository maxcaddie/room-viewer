//internals
import { floor } from "./floorReducer";

//externals
import { combineReducers } from "redux";

export interface StoreState {
  floor: number;
}

export const rootReducer = combineReducers({
  floor
});
