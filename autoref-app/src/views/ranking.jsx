import React, { useEffect, useState } from "react";
import "../css/referencia.css";
import axios from "axios";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

const Ranking = () => {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    dadosRanking();
  }, []);

  const dadosRanking = async () => {
    const { data } = await axios.get("http://localhost:8080/usuarios/ranking");
    setRanking(data);
  };

  return (
    <>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <div className="jumbotron">
        <h1 className="centralizar-ranking">RANKING DE USUÁRIOS</h1>

        <div className="centralizar"><h1>A</h1>
          {ranking.map((rank) => (
            <div key={rank}>
              <h5>{rank}</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Ranking;
