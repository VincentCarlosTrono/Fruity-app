import React, { useState } from "react";
import "../Styling/Navbar.scss";

const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <div className="header">
      <h1>Fruity</h1>
      <div className="navbar-btn">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#new-product">New</a>
          </li>
          <li>
            <a href="#feature">Feature</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="hamburger-btn">
        <button
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <i className="bx bx-menu"></i>
        </button>

        {menu ? (
          <div className="hamburger-menu">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#new-product">New</a>
              </li>
              <li>
                <a href="#feature">Feature</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Navbar;
