import React, { useRef, useState } from "react";

import Profile from "../images/profile.png";

function Navbar() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="navbar fixed-top">
      <div className="container">
        <a href="#/home" className="navbar-brand">
          Autoref
        </a>

        <div className="menu-profile">
          <button onClick={onClick} className="menu-button">
            <img src={Profile} alt="Avatar" height="20"></img>{" "}
            <b className="caret"></b>
          </button>

          <nav
            ref={dropDownRef}
            className={`menu ${isActive ? "active" : "inactive"}`}
          >
            <ul>
              <li className="log">
                <a href="#/home"> Logout</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
