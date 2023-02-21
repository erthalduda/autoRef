import React from "react";
import Sidebar from "../components/sidebar";

class Referencias extends React.Component {
  prepareMonografia = () => {
    this.props.history.push("/opcoes_mono");
  };

  preparePeriodico = () => {
    this.props.history.push("/periodico");
  };

  prepareTrabalho = () => {
    this.props.history.push("/trabalho");
  };

  prepareWebsite = () => {
    this.props.history.push("/website");
  };
  prepareArtigo = () => {
    this.props.history.push("/artigo");
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
              <h1 className="display-3">CADASTRAR REFERÊNCIA</h1>
              <p className="lead">Escolha o tipo:</p>
              <div className="button1">
                <button
                  onClick={this.prepareMonografia}
                  className="btn btn-success"
                >
                  Monografia
                </button>
                <button
                  onClick={this.preparePeriodico}
                  className="btn btn-success"
                >
                  Periódica
                </button>
                <button
                  onClick={this.prepareTrabalho}
                  className="btn btn-success"
                >
                  Trabalho Acadêmico
                </button>
                <button
                  onClick={this.prepareWebsite}
                  className="btn btn-success"
                >
                  Website
                </button>
                <button
                  onClick={this.prepareArtigo}
                  className="btn btn-success"
                >
                  Artigo
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Referencias;
