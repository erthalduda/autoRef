import React from "react";

import "../custom.css";
class Home extends React.Component {
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
                <span>REFERENCIAS</span>
              </a>

              <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
              >
                <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                <span>BUSCAR REFERENCIAS</span>
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
