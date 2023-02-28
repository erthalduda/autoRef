import React, { useEffect, useState } from "react";
import "../css/referencia.css";
import { useAxios } from "../hooks/axios";
import axios from "axios";
import UsuarioService from "../app/services/UsuarioService";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import * as messages from "../components/toastifyClasse";
const RepositorioPrivado = () => {
  const [referencias, setReferencias] = useState([]);
  const { fetchData } = useAxios();

  useEffect(() => {
    const buscarDados = async () => {
      const axiosParams = {
        baseURL: "http://localhost:8080",
        method: "GET",
        url: "/referencias/buscar/privado/",
      };

      const { response, error } = await fetchData(axiosParams, true);

      if (response && !error) {
        setReferencias(response.data);
      } else if (error) {
      }
    };
    buscarDados();
  }, []);

  const renderizarReferenicas = () => {
    return referencias.map((referencias) => (
      <tr>
        <td>{referencias?.formatoFinal}</td>
        <td> {referencias?.citacaoDireta}</td>
        <td>{referencias?.citacaoIndireta}</td>
      </tr>
    ));
  };

  return (
    <>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <h1 id="referencia" className="centralizar-nome">
        Suas Referências
      </h1>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">REFERÊNCIA</th>
            <th scope="col">CIT. DIRETA</th>
            <th scope="col">CIT. INDIRETA</th>
          </tr>
        </thead>
        <tbody>{renderizarReferenicas()}</tbody>
      </table>
    </>
  );
};

export default RepositorioPrivado;
