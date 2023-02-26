// import React from "react";
// //import FormGroup from "../components/form-group";

// import { useState, useEffect } from "react";
// import axios from "axios";
// //import login from "./login";

// import "../css/referencia.css";
// import Sidebar from "../components/sidebar";

// function RepositorioGeral({url}) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [inputFields, setInputFields] = useState([
//     {
//       id: 1,
//       name: "pesquisa",
//       value: "",
//       type: "text",
//     },
//   ]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const { data } = await axios.get(url, { params: { q: searchTerm } });
//       setResults(data);
//     };
//     fetchData();
//   }, [searchTerm]);

//   const handleInputChange = (event) => {
//     setSearchTerm(event.target.value);
//   };
  

//   return (
//     <>
//      <Sidebar></Sidebar>
//       <h1 id="referencia">Repositório Geral</h1>
//       <div>
//         <div className="form-group-ref">
//           <form onSubmit={onSubmit}>
//             {inputFields.map((input, index) => {
//               return (
//                 <div key={index}>
//                   <input
//                     type={input.type}
//                     key={input.id}
//                     id={input.id}
//                     value={input.value}
//                     name={input.name}
//                     placeholder={input.placeholder}
//                     className="form-input"
//                     onChange={(e) => handleFormChange(input.id, e)}
//                   />
//                 </div>
//               );
//             })}

//             <div>
//               <button type="submit" className="btn btn-success">
//                 Pesquisar
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* <button onClick={this.entrar} className="btn btn-success">Adicionar</button> */}
//     </>
//   );
// }

// export default RepositorioGeral;
