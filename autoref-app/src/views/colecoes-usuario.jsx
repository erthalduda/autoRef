// import React from "react";
// import { useState } from "react";
// import { useHistory } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../components/navbar";
// import "../css/referencia.css";
// import Sidebar from "../components/sidebar";

// function ColecoesUsuario() {
//   const [colecoes, setColecoes] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setError] = useState(false);

//   let history = useHistory();

//   const prepareCadastrarColecao = () => {
//     history.push("/cadastro_colecao");
//   };

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     axios.post("https://localhost/8080/colecoes/cadastrar", inputFields);
//     console.log(inputFields);
//   };

//   const handleFormChange = (id, event) => {
//     let data = [...inputFields];
//     const inputFiltrado = data.find((input) => input.id === id);

//     inputFiltrado.value = event.target.value;

//     data = data.map((inputField) => {
//       if (inputField.id === inputFiltrado.id) {
//         inputField = { ...inputFiltrado };
//       }
//       return inputField;
//     });
//     // //data[index][event.target.name] = event.target.value;
//     setInputFields(data);
//   };

//   // const onChangeAutor = (value, autor) => {

//   //   const valor = value.target.value;
//   // let autorFiltrado = inputFields.find(a => {
//   //   return autor?.id === a?.id
//   // })

//   //     console.log(autorFiltrado)
//   //     autorFiltrado.autor = valor;

//   //     console.log(inputFields)
//   //     //this.setState({ autor: autor.target.value })
//   // }

//   return (
//     <>
//       <Sidebar></Sidebar>
//       <Navbar></Navbar>
//       <h1 id="referencia">Suas coleções</h1>
//       <br></br>
//       <div className="form-group-ref">
//         <form onSubmit={onSubmit}>
//           {inputFields.map((input, index) => {
//             return (
//               <div key={index}>
//                 <input
//                   type={input.type}
//                   key={input.id}
//                   id={input.id}
//                   value={input.value}
//                   name={input.name}
//                   placeholder={input.placeholder}
//                   className="form-input"
//                   onChange={(e) => handleFormChange(input.id, e)}
//                 />
//               </div>
//             );
//           })}

//           <div className="sla">
//             <button
//               type="submit"
//               className="btn btn-primary"
//               onClick={prepareCadastrarColecao}
//             >
//               +
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default ColecoesUsuario;
