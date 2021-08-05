import React from "react";
import logo from "../img/pngaaa.com-1056902.png";
import "../styles/magicLogo.css";

const MagicLogo = () => {
  return (
    <div>
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
};

export default MagicLogo;
