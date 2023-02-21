import React from "react";
//import FormGroup from "../components/form-group";

import { useState } from "react";
import axios from "axios";
//import login from "./login";

import "../css/referencia.css";
import Sidebar from "../components/sidebar";

function RepositorioGeral() {
  const [inputFields, setInputFields] = useState([
    {
      id: 1,
      name: "pesquisa",
      value: "",
      type: "text",
    },
  ]);

  const onSubmit = async (event) => {
    event.preventDefault();
    axios.post("https://localhost/3000/referencias/cadastrar", inputFields);
    console.log(inputFields);
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
      <h1 id="referencia">Repositório Geral</h1>
      <div>
        <div className="form-group-ref">
          <form onSubmit={onSubmit}>
            {inputFields.map((input, index) => {
              return (
                <div key={index}>
                  <input
                    type={input.type}
                    key={input.id}
                    id={input.id}
                    value={input.value}
                    name={input.name}
                    placeholder={input.placeholder}
                    className="form-input"
                    onChange={(e) => handleFormChange(input.id, e)}
                  />
                </div>
              );
            })}

            <div>
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
