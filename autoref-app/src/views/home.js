import React from "react";
import Sidebar from "../components/sidebar";

import "../custom.css";
class Home extends React.Component {
  render() {
    return (
      <>
        <Sidebar></Sidebar>
        <div className="row">
          <div
            className="col-md-6"
            style={{ position: "absolute", left: "500px" }}
          >
            <div className="jumbotron">
              <h1 className="display-3">AUTOREF</h1>
              <p className="lead">Suas referências de maneira fácil.</p>
              <p>Essa é a área central do site.</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
