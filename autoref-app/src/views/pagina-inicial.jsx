import React from "react";
import Navbar from "../components/navBarInicio";
import { useHistory } from "react-router-dom";

const PaginaInicial = () => {
  let history = useHistory();

  const irParaLogin = () => {
    history.push("/login");
  };

  const irParaCadastro = () => {
    history.push("/cadastro");
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="container text-center">
        <h2>Seja bem-vindo ao AutoRef!</h2>
        Um sistema para o gerenciamento de referências bibliográficas! <br></br>{" "}
        Clique em um dos botões abaixo para realizar seu login ou cadastrar-se:{" "}
        <br />
        <br />
        <div className="offset-md-4 col-md-4">
          <button
            style={{ width: "50%" }}
            onClick={irParaLogin}
            className="btn btn-success"
          >
            <i className="pi pi-sign-in"></i> Login
          </button>
          <button
            style={{ width: "50%" }}
            onClick={irParaCadastro}
            className="btn btn-success"
          >
            <i className="pi pi-sign-in"></i> Cadastro
          </button>
        </div>
      </div>
    </>
  );
};

export default PaginaInicial;
