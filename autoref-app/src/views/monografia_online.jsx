import React from "react";
//import FormGroup from "../components/form-group";

import { useState } from "react";
import axios from "axios";
//import login from "./login";

import "../css/referencia.css";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { useAxios } from "../hooks/axios";


function MonografiaOnline() {

  const { fetchData } = useAxios();
  const [error, setError] = useState(false);

  const [inputFields, setInputFields] = useState([
  
    {
      id: 2,
      name: "titulo",
      value: "",
      label: "Título:",
      placeholder: "Ex: Titulo",
      type: "text",
    },

    {
      id: 3,
      name: "subtitulo",
      label: "Subtítulo:",
      value: "",
      placeholder: "Ex: Subtitulo",
      type: "text",
    },

    {
      id: 4,
      name: "anoPublicacao",
      value: "",
      label: "Ano de publicação:",
      placeholder: "Ex: 2023",
      type: "number",
    },
    {
      id: 5,
      name: "anoEntrega",
      value: "",
      label: "Ano de entrega:",
      placeholder: "Ex: 2023",
      type: "number",
    },

    {
      id: 6,
      name: "quantidadePaginas",
      label: "Quantidade de páginas:",
      value: "",
      placeholder: "Ex: 9",
      type: "number",
    },

    {
      id: 7,
      name: "cidade",
      label: "Cidade:",
      value: "",
      placeholder: "Ex: Porto Alegre",
      type: "text",
    },
    {
      id: 8,
      name: "editora",
      label: "Editora:",
      value: "",
      placeholder: "Ex: Editora A",
      type: "text",
    },
    {
      id: 9,
      name: "edicao",
      label: "Edição:",
      value: "",
      placeholder: "Ex: 6",
      type: "number",
    },

    {
      id: 11,
      name: "url",
      value: "",
      label: "URL:",
      placeholder: "Ex: www.site.com.br",
      type: "text",
    },
    {
      id: 12,
      name: "dataAcesso",
      value: "",
      label: "Data de acesso:",
      placeholder: "Ex: 18/01/2023",
      type: "date",
    },

    {
      id: 13,
      name: "autor",
      value: "",
      label: "Autor:",
      placeholder: "Ex: Maria Silva",
      type: "text",
    },
  ]);
  const [dataEnviarDados, setDataEnviarDados] = useState({
    tipo: 'monografiaOnline',
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
    const id = inputFields.length + 3;
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
  };
  return (
    <>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <h1 id="referencia" className="centralizar-nome">Monografia Online</h1>
      <br></br>
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

            <button className="btn btn-success" onClick={addFields}>
              + Autor
            </button>
          </div>
        </form>
      </div>

      {/* <button onClick={this.entrar} className="btn btn-success">Adicionar</button> */}
    </>
  );
}

export default MonografiaOnline;
