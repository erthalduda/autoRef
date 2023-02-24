import React from "react";
//import FormGroup from "../components/form-group";

import { useState } from "react";
import axios from "axios";
//import login from "./login";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import "../css/referencia.css";

function ColecaoPeriodicaMeioEletronico() {
  const [inputFields, setInputFields] = useState([
    {
      id: 1,
      name: "tipo",
      value: "colecaoPublicacaoPeriodicaEletronico",
      type: "hidden",
    },
    {
      id: 2,
      label: "Título:",
      name: "titulo",
      value: "",
      placeholder: "Ex: Título",
      type: "text",
    },

    {
      id: 3,
      name: "subtituloPublicacao",
      label: "Subtítulo:",
      value: "",
      placeholder: "Ex: Subtítulo",
      type: "text",
    },

    {
      id: 4,
      label: "Editora:",
      name: "editora",
      value: "",
      placeholder: "Ex: Editora",
      type: "text",
    },
    {
      id: 5,
      name: "dataInicio",
      label: "Data de início:",
      value: "",
      placeholder: "Ex: 2004",
      type: "number",
    },

    {
      id: 6,
      name: "dataFim",
      label: "Data final:",
      value: "",
      placeholder: "Ex: 2005",
      type: "number",
    },

    {
      id: 7,
      name: "issn",
      label: "ISSN:",
      value: "",
      placeholder: "Ex: 123456789",
      type: "text",
    },
    {
      id: 8,
      name: "doi",
      value: "",
      label: "DOI:",
      placeholder: "Ex: 00.0000/000",
      type: "text,",
    },
    {
      id: 9,
      name: "url",
      label: "URL:",
      value: "",
      placeholder: "Ex: www.url.com",
      type: "text,",
    },
    {
      id: 10,
      label: "Data de acesso",
      name: "dataAcesso",
      value: "",
      placeholder: "Ex: dd/mm/aaaa",
      type: "date",
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
      <h1 id="referencia">
      <br></br>
        Coleção de Publicação Periódica em Meio Eletrônico
      </h1>
      <div className="form-group-ref">
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

          <div className="sla">
            <button type="submit" className="btn btn-success">
              Salvar
            </button>
          </div>
        </form>
      </div>

      {/* <button onClick={this.entrar} className="btn btn-success">Adicionar</button> */}
    </>
  );
}

export default ColecaoPeriodicaMeioEletronico;
