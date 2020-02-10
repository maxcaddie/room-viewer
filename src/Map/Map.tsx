//Internals
import { store } from "../State";
import { nextFloor, prevFloor } from "../redux/actions/floorActions";
import "./Map.css";

//Externals
import React from "react";
import { useSelector } from "react-redux";
import { numToFloor, numToFloorName } from "../constants/floor/Floor";
import Button from "react-bootstrap/Button";

const Map: React.FC = () => {
  const floorOn = useSelector(store.getState);
  return (
    <React.Fragment>
      {/* <Button variant="light" onClick={() => store.dispatch(nextFloor())} className="button">
        Next Floor
      </Button> */}
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
