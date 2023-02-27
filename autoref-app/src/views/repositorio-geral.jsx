import React from "react";
//import FormGroup from "../components/form-group";

import { useState, useEffect } from "react";
import axios from "axios";
//import login from "./login";

import "../css/referencia.css";
import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar";

function RepositorioGeral({ url }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputFields, setInputFields] = useState([
    {
      id: 1,
      name: "pesquisa",
      label: "Pesquisa:",
      value: "",
      placeholder: "Ex: Mário Quintana",
      type: "text",
    },
  ]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const { data } = await axios.get(url, { params: { q: searchTerm } });
  //       setResults(data);
  //     };
  //     fetchData();
  //   }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormChange = (id, event) => {
    let data = [...inputFields];
    const inputFiltrado = data.find((input) => input.id === id);

    inputFiltrado.value = event.target.value;

    data = data.map((inputField) => {
      if (inputField.id === inputFiltrado.id) {
        inputField = { ...inputFiltrado };
      }
      return inputField;
    });
    // //data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  return (
    <>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <h1 id="referencia" className="centralizar-nome">
        Repositório Geral
      </h1>
      <div>
        <div className="centralizar">
          <form>
            {inputFields.map((input, index) => {
              return (
                <div
                  key={index}
                  style={{ fontWeight: "bold" }}
                  className="centralizar"
                >
                  {input.label != null ? <div>{input.label}</div> : <></>}

                  <input
                    type={input.type}
                    key={input.id}
                    id={input.id}
                    value={input.value}
                    name={input.name}
                    className="form-input"
                    placeholder={input.placeholder}
                    onChange={(e) => handleFormChange(input.id, e)}
                  />
                </div>
              );
            })}

            <div className="centralizar">
              <button type="submit" className="btn btn-success">
                Pesquisar
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* <button onClick={this.entrar} className="btn btn-success">Adicionar</button> */}
    </>
  );
}

export default RepositorioGeral;
