//Externals
import React from "react";

//Stylesheets
import "./Header.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="header sticky mainColourBackground">
      <img src="./FishStuff/Logo.png" alt="Fishbowls logo" className="logo" />
      <button onClick={() => alert("Go home")} className="home">
        <img src="./HouseStuff/house.png" alt="Home Button" className="home" />
        {/* <Link to="." /> 
        Router stuff to be added*/}
      </button>
    </div>
  );
};

export default Header;
