import React from "react";
import "../css/referencia.css";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { useHistory } from "react-router-dom";

const Referencias = () => {
  let history = useHistory();

  const prepareMonografia = () => {
    history.push("/opcoes_mono");
  };
  const preparePeriodico = () => {
    history.push("/periodico");
  };
  const prepareTrabalho = () => {
    history.push("/trabalho");
  };
  const prepareWebsite = () => {
    history.push("/website");
  };
  const prepareArtigo = () => {
    history.push("/artigo");
  };
  return (
    <>
      {" "}
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <div className="row">
        <div
          className="col-md-6"
          style={{ position: "relative", left: "300px" }}
        >
          <div className="jumbotron">
            <h1 className="display-3">CADASTRAR REFERÊNCIA</h1>
            <p className="lead">
              Escolha o tipo de referência que deseja cadastrar:
            </p>
            <div className="button1">
              <button onClick={prepareMonografia} className="btn btn-success">
                Monografia
              </button>
              <button onClick={prepareArtigo} className="btn btn-success">
                Artigo
              </button>
              <button onClick={prepareTrabalho} className="btn btn-success">
                Trabalho Acadêmico
              </button>
              <button onClick={preparePeriodico} className="btn btn-success">
                Publicação Periódica
              </button>
              <button onClick={prepareWebsite} className="btn btn-success">
                Website
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Referencias;
