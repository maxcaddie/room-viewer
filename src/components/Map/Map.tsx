//Internals
import { store } from "../../State";
import { nextFloor, prevFloor } from "../../redux/actions/floorActions";
import { numToFloor, numToFloorName } from "../../constants/floor/Floor";
import { isGoBack, isGoForward } from "../../constants/map/Map";

//Externals
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

//Stylesheets
import "./Map.css";
import { MOBILE_SIZE } from "../../constants/MobileView";

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

  const floorOn = useSelector(store.getState).floor;

  return (
    <React.Fragment>
      <style>{"body { background-color: #e9ebef; }"}</style>
      {/* <p className="floor">{numToFloorName(floorOn)}</p> */}
      <div className="container">
        <img src={numToFloor(floorOn)} alt={numToFloor(floorOn)} className="floorMap" />
        <button
          className="navigationArrows left"
          onClick={() => {
            window.innerWidth > MOBILE_SIZE ? store.dispatch(prevFloor()) : store.dispatch(nextFloor());
          }}
        />
        <button className="navigationArrows right" onClick={() => store.dispatch(nextFloor())} />
      </div>
    </React.Fragment>
  );
};

export default Map;
