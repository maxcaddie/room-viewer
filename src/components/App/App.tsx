//Internals
import Map from "../Map/Map";
import Header from "../Header/Header";

//Externals
import React from "react";

//Stylesheets
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Map />
    </div>
  );
};

export default App;
