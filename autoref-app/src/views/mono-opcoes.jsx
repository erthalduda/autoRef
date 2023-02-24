import React from "react";
import "../css/referencia.css";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { useHistory } from "react-router-dom";

const OpcoesMono = () => {
    let history = useHistory();

  const prepareMonografia = () => {
    history.push("/monografia");
  };

  const prepareParteMonografia = () => {
    history.push("/parte_monografia");
  };

  const prepareMonografiaOnline = () => {
    history.push("/monografia_online");
  };

  const prepareMonografiaEletronico = () => {
    history.push("/monografia_eletronica");
  };
  return (
    <>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div className="row">
        <div
          className="col-md-6"
          style={{ position: "relative", left: "300px" }}
        >
          <div className="jumbotron">
            <h1 className="display-3">OPÇÕES DE MONOGRAFIA</h1>
            <p className="lead">Escolha o tipo:</p>
            <div className="button1">
              <button onClick={prepareMonografia} className="btn btn-success">
                Monografia
              </button>
              <button
                onClick={prepareParteMonografia}
                className="btn btn-success"
              >
                Parte de monografia
              </button>
              <button
                onClick={prepareMonografiaOnline}
                className="btn btn-success"
              >
                Monografia Online
              </button>
              <button
                onClick={prepareMonografiaEletronico}
                className="btn btn-success"
              >
                Monografia em meio eletronico
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OpcoesMono;
