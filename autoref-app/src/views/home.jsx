import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

import "../custom.css";
const Home = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <div className="centralizar">
        <div className="jumbotron">
          <b>
            <h1 className="display-3">AUTOREF</h1>
          </b>
        </div>
      </div>
      <div className="centralizar">
        <p className="bigFont">Suas referências de maneira fácil.</p>
      </div>
      <div className="centralizar">
        <p className="bigFont">
          Uma aplicação para o gerenciamento de referências bibliográficas.
        </p>
      </div>
    </>
  );
};

export default Home;
