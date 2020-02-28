//Externals
import React from "react";

//Stylesheets
import "./Header.css";

const Header: React.FC = () => {
  return (
    <div className="header sticky mainColourBackground">
      <img src="./FishStuff/Logo.png" alt="Fishbowls logo" className="logo" />
      <button onClick={() => alert("Go home you're drunk")} className="home">
        <img src="./HouseStuff/house.png" alt="Home Button" className="home" />
      </button>
    </div>
  );
};

export default Header;
