import React from "react";
//import "./styles/header.css";
import { ThemeConsumer } from "../context/ThemaContext";
const Header = ({ title }) => {
  return (
    <ThemeConsumer>
      {value => {
        let {
          backgroundColor,
          userName,
          changeBackGroundColor,
          premium
        } = value;

        return (
          <nav className={backgroundColor}>
            <div className="nav-wrapper container">
              <a href="#!" className="brand-logo left">
                {title}
              </a>
              <ul className="nav-bar right">
                <li>
                  <a href="#!">
                    {userName}
                    {premium && (
                      <span
                        className="new badge cyan text-black"
                        data-badge-caption="PREMIUM"
                      ></span>
                    )}
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="btn-floating waves-effect grey"
                    onClick={() => {
                      changeBackGroundColor("grey");
                    }}
                  >
                    <i name="grey" className="material-icons iconCustom">
                      palette
                    </i>
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="btn-floating waves-effect blue"
                    onClick={() => {
                      changeBackGroundColor("blue");
                    }}
                  >
                    <i name="blue" className="material-icons iconCustom">
                      palette
                    </i>
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="btn-floating waves-effect black"
                    onClick={() => {
                      changeBackGroundColor("black");
                    }}
                  >
                    <i name="black" className="material-icons iconCustom">
                      palette
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        );
      }}
    </ThemeConsumer>
  );
};

export default Header;
