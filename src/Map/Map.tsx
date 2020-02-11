//Internals
import { store } from "../State";
import { nextFloor, prevFloor } from "../redux/actions/floorActions";
import "./Map.css";

//Externals
import React from "react";
import { useSelector } from "react-redux";
import { numToFloor, numToFloorName } from "../constants/floor/Floor";

document.onkeydown = function(e) {
  e = e || window.event;
  if (e.keyCode === 65 || e.keyCode === 37) {
    store.dispatch(prevFloor());
  }
  if (e.keyCode === 68 || e.keyCode === 39) {
    store.dispatch(nextFloor());
  }
};

const Map: React.FC = () => {
  const floorOn = useSelector(store.getState);

  return (
    <React.Fragment>
      <p className="floor">{numToFloorName(floorOn)}</p>
      <div>
        <button onClick={() => store.dispatch(prevFloor())}>Previous</button>
        <img src={numToFloor(floorOn)} alt={numToFloor(floorOn)} className="floorMap" />
        <button onClick={() => store.dispatch(nextFloor())}>Next</button>
      </div>
    </React.Fragment>
  );
};

export default Map;
