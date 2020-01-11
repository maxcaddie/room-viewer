//Internals
import { store, changeFloor } from "../State";

//Externals
import React from "react";

interface IMapProps {
  floor?: string;
}

const Map: React.FC = () => {
  return (
    <React.Fragment>
      <button onClick={() => store.dispatch(changeFloor())}>CLICK</button>
      <p className="floor">This will say what floor you are looking at {store.getState()}</p>
      <img src="./floors/MB2.jpg" alt="A floor" />
    </React.Fragment>
  );
};

export default Map;
