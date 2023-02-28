import React, { useEffect, useState } from "react";
import "../css/referencia.css";
import { useAxios } from "../hooks/axios";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { useLocalStorage } from "../hooks/local_storage";

const Ranking = () => {
  const [mensagemErro, setMensagemErro] = useState("Erro.");
  const [error, setError] = useState();
  const [TableData, setTableData] = useState([]);

  const localStorage = useLocalStorage();
  const { fetchData } = useAxios();

  async function retorna(event) {
    console.log("ALO ENTROU");

    const axiosParams = {
      baseURL: "http://localhost:8080",
      method: "GET",
      url: "/usuario/ranking",
    };
    axiosParams.auth = {
      username: localStorage.getHeader,
      password: localStorage.getHeader,
    };

    const { response, error } = await fetchData(axiosParams, false);

    if (response && !error) {
      console.log(response.data);

      const token = localStorage.getHeader(response, "X-Auth-Token");
      localStorage.save("token", token);
      localStorage.save("userData", JSON.stringify(response.data));
    } else if (error) {
      setError(mensagemErro);
    }
  }

  useEffect(() => {
    const response = retorna();
    setTableData(response);
    console.log(response);
  }, []);

  return (
    <>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <div className="jumbotron">
        <h1 className="centralizar-ranking">RANKING DE USUÁRIOS</h1>
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
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Ranking;
