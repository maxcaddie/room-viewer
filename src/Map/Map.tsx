//Internals
import { store, changeFloor } from "../State";

//Externals
import React, { useState } from "react";

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
      <button onClick={() => inc(count, setCount)}>CLICK</button>
      <p className="floor">This will say what floor you are looking at {count}</p>
      <img src="./floors/MB2.jpg" alt="A floor" />
    </React.Fragment>
  );
};

export default Map;
