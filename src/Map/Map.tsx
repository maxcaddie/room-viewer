//Internals
import { store } from "../State";
import { nextFloor, prevFloor } from "../redux/actions/floorActions";
import "./Map.css";

//Externals
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { numToFloor, numToFloorName } from "../constants/floor/Floor";
import { isGoBack, isGoForward } from "../constants/map/Map";

const Map: React.FC = () => {
  useEffect(() => {
    document.onkeydown = function(e) {
      e = e || window.event;
      if (isGoBack(e.keyCode)) {
        store.dispatch(prevFloor());
      }
      if (isGoForward(e.keyCode)) {
        store.dispatch(nextFloor());
      }
    };
  });

  const floorOn = useSelector(store.getState);

  return (
    <React.Fragment>
      <p className="floor">{numToFloorName(floorOn)}</p>
      <div>
        <button className="navigationArrows" onClick={() => store.dispatch(prevFloor())}>
          &lt;
        </button>
        <img src={numToFloor(floorOn)} alt={numToFloor(floorOn)} className="floorMap" />
        <button className="navigationArrows" onClick={() => store.dispatch(nextFloor())}>
          &gt;
        </button>
      </div>
    </React.Fragment>
  );
};

export default Map;
