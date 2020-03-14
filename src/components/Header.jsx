import React from "react";
import "./styles/header.css";

const Header = ({ title }) => {
  return (
    <nav className="backgroudHeader">
      <div className="nav-wrapper container">
        <a href="#!" className="brand-logo left">
          React Context
        </a>
        <ul className="nav-bar right">
          <li>
            <a href="#!">
              Nallely Sarahi Aguilar
              <span
                className="new badge cyan text-black"
                data-badge-caption="PREMIUM"
              ></span>
            </a>
          </li>
          <li>
            <a href="#!" className="btn-floating waves-effect grey">
              <i className="material-icons iconCustom">palette</i>
            </a>
          </li>
          <li>
            <a href="#!" className="btn-floating waves-effect blue">
              <i className="material-icons iconCustom">palette</i>
            </a>
          </li>
          <li>
            <a href="#!" className="btn-floating waves-effect black">
              <i className="material-icons iconCustom">palette</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
