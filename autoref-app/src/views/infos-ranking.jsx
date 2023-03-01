import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

const InfosRanking = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <div className="jumbotron">
        <h1 className="centralizar-nome">COMO SUBIR DE</h1>
        <h1 className="centralizar-nome">RANKING</h1>
        <p className="centralizar">
          {" "}
          <a href="/ranking" className="clicavel">
            Voltar para a tela de ranking
          </a>
        </p>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">AÇÃO</th>
              <th scope="col">PONTOS GANHOS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Criar uma referência</td>
              <td>100</td>
            </tr>{" "}
            <tr>
              <td> Criar uma coleção</td>
              <td>100</td>
            </tr>{" "}
            <tr>
              <td> Adicionar uma referência a uma coleção </td>
              <td> 50</td>
            </tr>
            <tr>
              <td>Criar 10 referências</td>
              <td> 500</td>
            </tr>
            <tr>
              <td>Adicionar 10 referências a uma coleção</td>
              <td> 500</td>
            </tr>
            {/* <tr>
              <td>Utilizar uma referência do repositório geral</td>
              <td> 100</td>
            </tr> */}
            {/* <tr>
              <td>
                Ter uma referência sua utilizada, a partir do repositório geral
              </td>
              <td> 200</td>
            </tr> */}
            <tr>
              <td>Criar 20 referências</td>
              <td> 1500</td>
            </tr>
            <tr>
              <td>Adicionar 20 referências a uma coleção</td>
              <td> 1500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InfosRanking;
