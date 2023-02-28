import React, { useEffect, useState } from "react";
import "../css/referencia.css";
import { useAxios } from "../hooks/axios";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

const Ranking = () => {
  const [usuarios, setUsuarios] = useState([]);
  const { fetchData } = useAxios();

  useEffect(() => {
    const buscarDados = async () => {
      const axiosParams = {
        baseURL: "http://localhost:8080",
        method: "GET",
        url: "/usuario/ranking",
      };

      const { response, error } = await fetchData(axiosParams, true);

      if (response && !error) {
        setUsuarios(response.data);
      } else if (error) {
      }
    };
    buscarDados();
  }, []);
  const renderizarUsuarios = () => {
    return usuarios.map((usuario, index) => (
      <tr>
        <td>{index + 1}</td>
        <td> {usuario?.nome}</td>
        <td>{usuario?.xp} XP</td>
      </tr>
    ));
  };
  return (
    <>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <div className="jumbotron">
        <h1 className="centralizar-ranking">RANKING DE USUÁRIOS</h1>
        <p className="centralizar">
          Quer saber como subir no ranking?
          <a href="/infos-ranking" className="clicavel">
            Clique aqui!
          </a>
        </p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">NOME</th>
              <th scope="col">XP</th>
            </tr>
          </thead>
          <tbody>{renderizarUsuarios()}</tbody>
        </table>
      </div>
    </>
  );
};
export default Ranking;
