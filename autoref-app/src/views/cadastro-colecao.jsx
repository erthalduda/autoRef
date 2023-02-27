import React from "react";
//import FormGroup from "../components/form-group";

import Navbar from "../components/navbar";
import { useState } from "react";
import axios from "axios";
//import login from "./login";

import "../css/referencia.css";
import Sidebar from "../components/sidebar";

function CadastroColecao() {
  const [inputFields, setInputFields] = useState([
    {
      id: 1,
      name: "nome",
      label: "Nome:",
      value: "",
      placeholder: "Ex: TCC",
      type: "text",
    },
  ]);
  
  const onSubmit = async (event) => {
    event.preventDefault();
    axios.post("https://localhost:8080/colecoes/cadastrar", inputFields);
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

  // const onChangeAutor = (value, autor) => {

  //   const valor = value.target.value;
  // let autorFiltrado = inputFields.find(a => {
  //   return autor?.id === a?.id
  // })

  //     console.log(autorFiltrado)
  //     autorFiltrado.autor = valor;

  //     console.log(inputFields)
  //     //this.setState({ autor: autor.target.value })
  // }

  return (
    <>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <h1 id="referencia">Cadastro de Coleção</h1>
      <br></br>
      <div className="centralizar">
        <form onSubmit={onSubmit}>
          {inputFields.map((input, index) => {
            return (
              <div key={index} className="form-item">
                {input.label != null ? (
                  <div className="form-label">{input.label}</div>
                ) : (
                  <></>
                )}

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

          <div className="form-clear"></div>

          <div className="centralizar">
            <button type="submit" className="btn btn-success">
              CRIAR COLEÇÃO
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CadastroColecao;
