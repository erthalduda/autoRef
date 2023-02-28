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
      <div className="card mb-3" key={repositorio?.formatoFinal}>
        <div className="card-body">
          <h5 className="card-title">{repositorio?.citacaoDireta}</h5>
          <p className="card-text">{repositorio?.citacaoIndireta}</p>
        </div>
      </div>
    ))
  }
  
  return (
    <>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <div className="jumbotron">
        <h1 className="centralizar-ranking">PESQUISAR REPOSITÓRIOS</h1>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Digite o termo de busca" 
            value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        {repositorios.length > 0 ? (
          <div className="card-columns">
            {renderizarRepositorios()}
          </div>
        ) : (
          <p>Nenhum repositório encontrado.</p>
        )}
      </div>
    </>
  );
};

export default RepositorioGeral;