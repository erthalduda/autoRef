import React, { useEffect, useState } from "react";
import "../css/referencia.css";
import { useAxios } from "../hooks/axios";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { useLocalStorage } from "../hooks/local_storage";

const Ranking = () => {
  const [mensagemErro, setMensagemErro] = useState("Erro.");
  const [error, setError] = useState();
<<<<<<< HEAD
  const [TableData, setTableData] = useState([]);
=======
>>>>>>> 107d0c24ab4bb69ae24525c1edc9392a6f4dba1d

  const localStorage = useLocalStorage();
  const { fetchData } = useAxios();

<<<<<<< HEAD
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

=======
  const retorna = async (event) => {

    console.log("ALO ENTROU");

    const axiosParams = {
      baseURL: "http://localhost:8080",
      method: "GET",
      url: "/usuario/ranking",
      withCredentials: true,
    };
    axiosParams.auth = {
      username: localStorage.getHeader,
      password: localStorage.getHeader,
    };

    const { response, error } = await fetchData(axiosParams, false);

>>>>>>> 107d0c24ab4bb69ae24525c1edc9392a6f4dba1d
    if (response && !error) {
      console.log(response.data);

      const token = localStorage.getHeader(response, "X-Auth-Token");
      localStorage.save("token", token);
      localStorage.save("userData", JSON.stringify(response.data));
    } else if (error) {
      setError(mensagemErro);
    }
<<<<<<< HEAD
  }

  useEffect(() => {
    const response = retorna();
    setTableData(response);
    console.log(response);
  }, []);
=======
  };

  const TableData = retorna;
>>>>>>> 107d0c24ab4bb69ae24525c1edc9392a6f4dba1d

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
<<<<<<< HEAD
              <td></td>
=======
              <td>{TableData()}</td>
>>>>>>> 107d0c24ab4bb69ae24525c1edc9392a6f4dba1d
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Ranking;
