import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

import "../custom.css";
class Home extends React.Component {
  render() {
    return (
      <>
        <Sidebar></Sidebar>
        <Navbar></Navbar>
        <div className="row">
          <div
            className="col-md-6"
            style={{ position: "absolute", left: "500px" }}
          >
            <div className="jumbotron">
              <h1 className="display-3">AUTOREF</h1>
              <p className="lead">Suas referências de maneira fácil.</p>
              <p>
                Uma aplicação para o gerenciamento de referências
                bibliográficas.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
