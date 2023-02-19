import React, { useRef, useState } from "react";


import NavbarItem from "./navbaritem";
import "../css/navbar.css"

import Profile from "../images/profile.png"



function Navbar() {

const dropDownRef = useRef(null);
const [isActive, setIsActive] = useState(false)
const onClick = () => setIsActive(!isActive)




    return (






        <div className="navbar fixed-top">

            <div className="container">
                <navburguer>
                  <input className="checkbox" type="checkbox" 
                  name= "" id=""/>
                  <div className="hamburguer-lines">
                    <span className="line line1"></span>
                  </div>
                  <div className="menu-items">
                    <li><a href="#">Antonio</a></li>
                    <li><a href="#">Antonio</a></li>
                    <li><a href="#">Antonio</a></li>
                  </div>
                </navburguer>
          

                <a href="#/home" className="navbar-brand" >Autoref</a>
                
                    <div className="menu-profile">
                        <button onClick={onClick} className="menu-button">
                            
                    
                    <img src={Profile}  alt="Avatar" height="20"  ></img>  <b className="caret"></b>
                    </button>
                   
                    <nav
                    ref={dropDownRef}
                    className={`menu ${isActive ? "active" : "inactive"}` }
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





        





    )

}

export default Navbar
