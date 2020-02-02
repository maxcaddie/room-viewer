//Internals
import { store } from "../State";
import { changeFloor } from "../redux/actions/floorActions";

//Externals
import React from "react";
import { useSelector } from "react-redux";
import { Floors, numToFloor } from "../constants/Floor";

const Map: React.FC = () => {
  const floorOn = useSelector(store.getState);
  return (
    <React.Fragment>
      <button onClick={() => numToFloor(floorOn)}> FLOORT </button>
      <button onClick={() => store.dispatch(changeFloor())}>CLICK</button>
      <p className="floor">This will say what floor you are looking at {floorOn}</p>
      <img src={Floors.floor1} alt="A floor" />
    </React.Fragment>
  );
};

export default Map;
