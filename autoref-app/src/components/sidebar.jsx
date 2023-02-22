import React from "react";

function Sidebar() {
  return (
    <nav
      id="sidebarMenu"
      className="collapse d-lg-block sidebar collapse bg-white"
    >
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-1 mt-4">
          <a
            href="#/referencias"
            className="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
          >
            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
            <span>CADASTRAR REFERÊNCIA</span>
          </a>
          <a
            href="#/repositorio_privado"
            className="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
          >
            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
            <span>MINHAS REFERÊNCIAS</span>
          </a>
          <a
            href="#/repositorio_geral"
            className="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
          >
            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
            <span>BUSCAR REFERÊNCIAS</span>
          </a>
          <a
            href="#/colecoes"
            className="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
          >
            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
            <span>COLEÇÕES</span>
          </a>
          <a
            href="#/ranking"
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
  );
}

export default Sidebar;
