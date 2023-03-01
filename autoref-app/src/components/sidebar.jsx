import React from "react";
import { BsX } from "react-icons/bs";

function fechaSideBar() {
  document.getElementById("sidebarRetratil").style.width = "0";
}

function Sidebar() {
  return (
    <>
      <div id="sidebarRetratil" className="sidebar">
        <button onClick={() => fechaSideBar()} className="closebtn">
          <BsX></BsX>
        </button>

        <a
          href="/home"
          className="list-group-item list-group-item-action py-2 ripple"
          aria-current="true"
        >
          <i className="fas fa-tachometer-alt fa-fw me-3"></i>
          <span>PÁGINA INICIAL</span>
        </a>
        <a
          href="/referencias"
          className="list-group-item list-group-item-action py-2 ripple"
          aria-current="true"
        >
          <i className="fas fa-tachometer-alt fa-fw me-3"></i>
          <span>CADASTRAR REFERÊNCIA</span>
        </a>
        <a
          href="/repositorio_privado"
          className="list-group-item list-group-item-action py-2 ripple"
          aria-current="true"
        >
          <i className="fas fa-tachometer-alt fa-fw me-3"></i>
          <span>MINHAS REFERÊNCIAS</span>
        </a>
        <a
          href="/repositorio_geral"
          className="list-group-item list-group-item-action py-2 ripple"
          aria-current="true"
        >
          <i className="fas fa-tachometer-alt fa-fw me-3"></i>
          <span>BUSCAR REFERÊNCIAS</span>
        </a>
        {/* <a
          href="/colecoes"
          className="list-group-item list-group-item-action py-2 ripple"
          aria-current="true"
        >
          <i className="fas fa-tachometer-alt fa-fw me-3"></i>
          <span>COLEÇÕES</span>
        </a> */}
        <a
          href="/ranking"
          className="list-group-item list-group-item-action py-2 ripple"
          aria-current="true"
        >
          <i className="fas fa-tachometer-alt fa-fw me-3"></i>
          <span>RANKING</span>
        </a>
        <a
          href="/faq"
          className="list-group-item list-group-item-action py-2 ripple"
          aria-current="true"
        >
          <i className="fas fa-tachometer-alt fa-fw me-3"></i>
          <span>FAQ</span>
        </a>
      </div>
    </>
  );
}

export default Sidebar;
