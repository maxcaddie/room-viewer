//Internals
import { store } from "../State";
import { changeFloor } from "../redux/actions/floorActions";
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
      <Button variant="light" onClick={() => store.dispatch(changeFloor())} className="button">
        Next Floor
      </Button>
      <p className="floor">{numToFloorName(floorOn)}</p>
      <img src={numToFloor(floorOn)} alt={numToFloor(floorOn)} className="floorMap" />
    </React.Fragment>
  );
};

export default Map;
