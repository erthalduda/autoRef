import React, { useRef, useState } from "react";

import { BsBoxArrowRight } from "react-icons/bs";
import Sidebar from "./sidebar";

function abreSideBar() {
  document.getElementById("sidebarRetratil").style.width = "300px";
}

function Navbar() {
  return (
    <>
      <Sidebar></Sidebar>
      <div className="navbar fixed-top">
        <div className="container">
          <button className="none" onClick={() => abreSideBar()}>
            <b>☰ AUTOREF</b>
          </button>

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
    </>
  );
}

export default Navbar;
