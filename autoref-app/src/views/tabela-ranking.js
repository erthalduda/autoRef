import React, { useEffect, useState } from "react";
import "../css/referencia.css";
import axios from "axios";
import UsuarioService from "../app/services/UsuarioService";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import * as messages from "../components/toastifyClasse";

const Ranking = () => {
  // this.service = new UsuarioService();

  // this.service.rankingUsuarios()
  //   .then((resposta) => {
  //     const lista = resposta.data;

  //     if (lista.length < 1) {
  //       messages.mensagemAlerta("Nenhuma referência foi encontrada.");
  //     }
  //     this.setState({ referencias: lista });
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // const [ranking, setRanking] = useState([]);

  // useEffect(() => {
  //   dadosRanking();
  // }, []);

  // const dadosRanking = async () => {
  //   const { data } = await axios.get("http://localhost:8080/usuarios/ranking");
  //   setRanking(data);
  // };

  return (
    <>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <div className="jumbotron">
        <h1 className="centralizar-ranking">RANKING DE USUÁRIOS</h1>
        <p className="centralizar"><a href="/infos-ranking" className="clicavel">Quer saber como subir de ranking?</a></p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">NOME</th>
              <th scope="col">XP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td> RODRIGO REMOR </td>
              <td>4500XP</td>
            </tr>{" "}
            <tr>
              <td>2</td>
              <td> LOURENÇO BASSO </td>
              <td>3200XP</td>
            </tr>{" "}
            <tr>
              <td>3</td>
              <td> WILLIAM HOLZ </td>
              <td> 3000XP</td>
            </tr>
            <tr>
              <td>3</td>
              <td> EDUARDA ERTHAL </td>
              <td> 2800XP</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Ranking;
