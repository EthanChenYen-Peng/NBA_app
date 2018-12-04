import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";

const Header = () => {
  const logo = () => {
    return (
      <Link to="/" className="logo">
        <img alt="nba" src="/images/nba_logo.png" />
      </Link>
    );
  };

  const navBars = () => {
    return (
      <div className="bars">
        <FontAwesome
          name="bars"
          style={{ color: "#dfdfdf", padding: "10px", cursor: "pointer" }}
        />
      </div>
    );
  };
  return (
    <header className="header">
      <div className="headerOpt">
        {navBars()}
        {logo()}Header
      </div>
    </header>
  );
};

export default Header;
