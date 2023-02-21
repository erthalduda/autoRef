import React from "react";
import Sidebar from "../components/sidebar";

class MonoOpcoes extends React.Component {
  prepareMonografia = () => {
    this.props.history.push("/monografia");
  };

  prepareParteMonografia = () => {
    this.props.history.push("/parte_monografia");
  };

  prepareMonografiaOnline = () => {
    this.props.history.push("/monografia_online");
  };

  prepareMonografiaEletronico = () => {
    this.props.history.push("/monografia_eletronica");
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
              <h1 className="display-3">OPÇÕES DE MONOGRAFIA</h1>
              <p className="lead">Escolha o tipo:</p>
              <div className="button1">
                <button
                  onClick={this.prepareMonografia}
                  className="btn btn-success"
                >
                  Monografia
                </button>
                <button
                  onClick={this.prepareParteMonografia}
                  className="btn btn-success"
                >
                  Parte de monografia
                </button>
                <button
                  onClick={this.prepareMonografiaOnline}
                  className="btn btn-success"
                >
                  Monografia Online
                </button>
                <button
                  onClick={this.prepareMonografiaEletronico}
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
  }
}

export default MonoOpcoes;
