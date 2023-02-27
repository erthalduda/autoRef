// import React from "react";
// import { useState } from "react";
// import { useHistory } from "react-router-dom";
// import axios from "axios";
// import "../css/referencia.css";
// import Sidebar from "../components/sidebar";
// import Navbar from "../components/navbar";

// function ColecoesUsuarioDois() {

//     const [colecoes, setColecoes] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [errorMessage, setError] = useState(false);

//     const fetchColecoes () => ({

//     });
//     useEffect(() => {
//         getColecoes();
//       }, []);
    
//       async function getColecoes() {
//         setLoading(true);
    
//         try {
//           const response = await fetchColecoes();
//           setColecoes(response);
//         } catch (error) {
//           setError(error.message);
//         } finally {
//           setLoading(false);
//         }
//       }
    

//   return (
//     <>
//       <Sidebar></Sidebar>
//       <Navbar></Navbar>
//       <h1 id="referencia" className="centralizar-nome">Suas coleções</h1>
//     </>
//   );
// }

// export default ColecoesUsuarioDois;
