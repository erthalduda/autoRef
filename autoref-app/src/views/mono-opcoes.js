import React from "react";

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
        <nav
          id="sidebarMenu"
          className="collapse d-lg-block sidebar collapse bg-white"
        >
          <div className="position-sticky">
            <div className="list-group list-group-flush mx-3 mt-4">
              <a
                href="#/referencias"
                className="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
              >
                <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                <span>REFERÊNCIAS</span>
              </a>

              <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
              >
                <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                <span>BUSCAR REFERÊNCIAS</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
              >
                <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                <span>COLEÇÕES</span>
              </a>
              {/* <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
              >
                <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                <span>CONQUISTAS</span>
              </a> */}
              <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
              >
                <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                <span>RANKING</span>
              </a>
              <a
                href="#/faq"
                className="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
              >
                <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                <span>FAQ</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
              >
                <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                <span>EDITAR PERFIL</span>
              </a>
            </div>
          </div>
        </nav>

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
