import { useAxios } from "../hooks/axios";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import React, { useEffect, useState } from "react";
const RepositorioGeral = () => {
  const [repositorios, setRepositorios] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { fetchData } = useAxios();

  useEffect(() => {
    const buscarDados = async () => {
      const axiosParams = {
        baseURL: "http://localhost:8080",
        method: "GET",
        url:`/referencias/buscar/geral/${searchTerm}`,
      };
 
      const { response, error } = await fetchData(axiosParams, true);

      if (response && !error) {
    console.log(response);

        setRepositorios(response.data)
      } else if (error) {
        console.error(error);
      }
    }
    buscarDados();   
  }, [searchTerm]);
  
  const renderizarRepositorios = () => {
    return repositorios.map((repositorio) => (
      <tr>
        <td>{repositorio?.formatoFinal}</td>
        <td> {repositorio?.citacaoDireta}</td>
        <td>{repositorio?.citacaoIndireta}</td>
      </tr>
    ));
  };
  
  return (
    <>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <div className="jumbotron">
        <h1 className="centralizar-ranking">Repositório Geral</h1>
        <p className="centralizar">Digite o termo de busca:</p>
        <div className="centralizar">
          <input type="text" className="form-input" placeholder="Digite o termo de busca" 
            value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        {repositorios.length > 0 ? (
           <table className="table">
           <thead>
           <tr>
             <th scope="col">REFERÊNCIA</th>
             <th scope="col">CIT. DIRETA</th>
             <th scope="col">CIT. INDIRETA</th>
           </tr>
         
            {renderizarRepositorios()}
         
          </thead>
          </table>
        ) : (
          <p className="centralizar">Nenhuma referência encontrada.</p>
        )}
      </div>
    </>
  );
};

export default RepositorioGeral;