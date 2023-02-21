import React from "react";
import Sidebar from "../components/sidebar";

class Periodico extends React.Component {
  prepareColecaoPeriodica = () => {
    this.props.history.push("/colecao_periodica");
  };

  preparePartePeriodica = () => {
    this.props.history.push("/parte_periodica");
  };

  prepareColecaoPeriodicaEletronica = () => {
    this.props.history.push("/colecao_periodica_eletronica");
  };

  render() {
    return (
      <>
        <Sidebar></Sidebar>
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
                  onClick={this.prepareColecaoPeriodica}
                  className="btn btn-success"
                >
                  Coleção de Publicação Periódica
                </button>
                <button
                  onClick={this.preparePartePeriodica}
                  className="btn btn-success"
                >
                  Parte de Coleção de Publicação Periódica
                </button>
                <button
                  onClick={this.prepareColecaoPeriodicaEletronica}
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
  }
}
export default Periodico;
