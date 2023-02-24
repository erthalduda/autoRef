import React, { useRef, useState } from "react";

import { BsBoxArrowRight } from "react-icons/bs";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="navbar fixed-top">
      <div className="container">

        <a href="/home" className="navbar-brand-dois">
          <b>AUTOREF</b>
        </a>

        <div className="menu-profile">
          <div className="container">
            <a href="/" className="navbar-brand-dois">
              <b>Logout </b>
              <BsBoxArrowRight></BsBoxArrowRight>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
