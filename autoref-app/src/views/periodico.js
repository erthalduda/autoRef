import React from "react";

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
              <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
              >
                <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                <span>CONQUISTAS</span>
              </a>
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
