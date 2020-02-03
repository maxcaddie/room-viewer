//Internals
import { store } from "../State";
import { changeFloor } from "../redux/actions/floorActions";

//Externals
import React from "react";
import { useSelector } from "react-redux";
import { numToFloor } from "../constants/floor/Floor";

const Map: React.FC = () => {
  const floorOn = useSelector(store.getState);
  return (
    <React.Fragment>
      <button onClick={() => store.dispatch(changeFloor())}>CLICK</button>
      <p className="floor">This will say what floor you are looking at {floorOn}</p>
      <img src={numToFloor(floorOn)} alt={numToFloor(floorOn)} />
    </React.Fragment>
  );
};

export default Map;
