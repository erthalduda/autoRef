import React from "react";
//import FormGroup from "../components/form-group";
import { useAxios } from "../hooks/axios";
import { useState } from "react";
import axios from "axios";
//import login from "./login";
import Navbar from "../components/navbar";

import "../css/referencia.css";
import Sidebar from "../components/sidebar";

function ColecaoPeriodica() {
  const { fetchData } = useAxios();
  const [error, setError] = useState(false);
  const [inputFields, setInputFields] = useState([
   
    {
      id: 2,
      label: "Título",
      name: "titulo",
      value: "",
      placeholder: "Ex: Título",
      type: "text",
    },

    {
      id: 3,
      name: "subtituloPublicacao",
      value: "",
      label: "Subtítulo: ",
      placeholder: "Ex: Subtítulo",
      type: "text",
    },

    {
      id: 4,
      name: "editora",
      label: "Editora: ",
      value: "",
      placeholder: "Ex: Editora",
      type: "text",
    },
    {
      id: 5,
      name: "dataInicio",
      value: "",
      label: "Data de início (ano): ",
      placeholder: "Ex: 2004",
      type: "number",
    },

    {
      id: 6,
      name: "dataFim",
      value: "",
      label: "Data de fim (ano): ",
      placeholder: "Ex: 2005",
      type: "number",
    },
    {
      id: 7,
      name: "localPublicacao",
      value: "",
      label: "Local de publicação:",
      placeholder: "Ex: Porto Alegre",
      type: "text",
    },

    {
      id: 8,
      name: "issn",
      value: "",
      label: "ISSN: ",
      placeholder: "Ex: 123456789",
      type: "text",
    },
  ]);

  const [dataEnviarDados, setDataEnviarDados] = useState({
    tipo: 'colecaoPublicacaoPeriodica',
    autor: [],
  });
  const [autoresCriados, setAutoresCriados] = useState([]);

  const onSubmit = async (event) => {
    event.preventDefault();
    dataEnviarDados.autor = autoresCriados.map((obj) => obj.nome);

    console.log(dataEnviarDados);
    const axiosParams = {
      baseURL: "http://localhost:8080",
      method: "POST",
      url: "/referencias/cadastrar",
      data: dataEnviarDados,
    };
    const { response, error } = await fetchData(axiosParams, true);

    console.log(response);
    setError(true);
    if (response && !error) {
      setError(false);
      //navigate
    } else if (error) {
      setError(true);
    }
    console.log(inputFields);
  };

  const addFields = (event) => {
    event.preventDefault();
    const id = inputFields.length + 2;
    let newfield = {
      id: id,
      name: "autor",
     value: "",
      label: "Novo autor:",
      placeholder: "Ex: Maria Silva",
      type: "text",
    };
    setInputFields([...inputFields, newfield]);
    console.log(inputFields);
  };

  const handleFormChange = (id, event) => {
    let data = [...inputFields];
    const inputFiltrado = data.find((input) => input.id === id);

    inputFiltrado.value = event.target.value;

    if (inputFiltrado.name == "autor") {
      const autorSelecionado = autoresCriados.find((a) => a.id === id);

      if (autorSelecionado) {
        autorSelecionado.nome = inputFiltrado.value;
      } else {
        autoresCriados.push({ id: id, nome: inputFiltrado.value });
      }
      console.log(autoresCriados);
    } else {
      setDataEnviarDados({
        ...dataEnviarDados,
        [inputFiltrado.name]: inputFiltrado.value,
      });
    }

    data = data.map((inputField) => {
      if (inputField.id === inputFiltrado.id) {
        inputField = { ...inputFiltrado };
      }
      return inputField;
    });
    // //data[index][event.target.name] = event.target.value;
    console.log(dataEnviarDados);
    setInputFields(data);
  }
  return (
    <>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <h1 id="referencia" className="centralizar-nome">
        Coleção de Publicação
      </h1>
      <h1 id="referencia" className="centralizar-nome">
        {" "}
        Periódica
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
                  label={input.label}
                  value={input.value}
                  name={input.name}
                  placeholder={input.placeholder}
                  className="form-input"
                  onChange={(e) => handleFormChange(input.id, e)}
                />
              </div>
            );
          })}

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

export default ColecaoPeriodica;
