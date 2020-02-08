//Internals
import { store } from "../State";
import { changeFloor } from "../redux/actions/floorActions";
import "./Map.css";

//Externals
import React from "react";
import { useSelector } from "react-redux";
import { numToFloor, numToFloorName } from "../constants/floor/Floor";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

const Map: React.FC = () => {
  const floorOn = useSelector(store.getState);
  return (
    <React.Fragment>
      <ButtonToolbar>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </ButtonToolbar>
      <button onClick={() => store.dispatch(changeFloor())} className="button">
        CLICK
      </button>
      <p className="floor">{numToFloorName(floorOn)}</p>
      <img src={numToFloor(floorOn)} alt={numToFloor(floorOn)} />
    </React.Fragment>
  );
};

export default Map;
