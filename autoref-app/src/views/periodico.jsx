import React from "react";
import { useHistory } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

const Periodico = () => {
  let history = useHistory();

  const prepareColecaoPeriodica = () => {
    history.push("/colecao_periodica");
  };

  const preparePartePeriodica = () => {
    history.push("/parte_periodica");
  };

  const prepareColecaoPeriodicaEletronica = () => {
    history.push("/colecao_periodica_eletronica");
  };

  return (
    <>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <div className="row">
        <div
          className="col-md-6"
          style={{ position: "relative", left: "300px" }}
        >
          <div className="jumbotron">
            <h1 className="display-3">OPÇÕES DE PUBLICAÇÃO PERIÓDICA</h1>
            <p className="lead">Escolha o tipo:</p>
            <div className="button1">
              <button
                onClick={prepareColecaoPeriodica}
                className="btn btn-success"
              >
                Coleção de Publicação Periódica
              </button>
              <button
                onClick={preparePartePeriodica}
                className="btn btn-success"
              >
                Parte de Coleção de Publicação Periódica
              </button>
              <button
                onClick={prepareColecaoPeriodicaEletronica}
                className="btn btn-success"
              >
                Coleção de Publicação Periódica em Meio Eletrônico
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Periodico;
