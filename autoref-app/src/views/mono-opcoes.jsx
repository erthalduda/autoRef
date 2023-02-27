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
            <h1 className="centralizar-nome">OPÇÕES DE</h1>
            <h1 className="centralizar-nome">MONOGRAFIA</h1>
            <p className="centralizar">Escolha o tipo:</p>
            <div className="centralizar">
              <button onClick={prepareMonografia} className="btn btn-success">
                Monografia
              </button>
            </div>
            <div className="centralizar">
              <button
                onClick={prepareParteMonografia}
                className="btn btn-success"
              >
                Parte de Monografia
              </button>
              </div>
              <div className="centralizar">
                <button
                  onClick={prepareMonografiaOnline}
                  className="btn btn-success"
                >
                  Monografia Online
                </button>
              </div>
              <div className="centralizar">
                <button
                  onClick={prepareMonografiaEletronico}
                  className="btn btn-success"
                >
                  Monografia em Meio Eletrônico
                </button>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};
export default OpcoesMono;
