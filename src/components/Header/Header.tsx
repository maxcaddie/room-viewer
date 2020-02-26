//Externals
import React from "react";

//Stylesheets
import "./Header.css";

const Header: React.FC = () => {
  return (
    <div className="header sticky mainColourBackground">
      <img src="./FishStuff/Logo.png" alt="Fishbowls logo" className="logo" />
    </div>
  );
};

export default Header;
