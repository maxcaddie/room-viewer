//Internals
import { store, changeFloor } from "../State";

//Externals
import React, { useState } from "react";
import { useSelector } from "react-redux";

interface IMapProps {
  floor?: string;
}

function inc(getter: number, setter: React.Dispatch<React.SetStateAction<number>>) {
  setter(getter + 1);
}

const Map: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <button onClick={() => store.dispatch(changeFloor())}>CLICK</button>
      <p className="floor">This will say what floor you are looking at {useSelector(store.getState)}</p>
      <img src="./floors/MB2.jpg" alt="A floor" />
    </React.Fragment>
  );
};

export default Map;
