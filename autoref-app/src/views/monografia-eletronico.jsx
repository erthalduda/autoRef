import React from "react";
//import FormGroup from "../components/form-group";

import { useState } from "react";
import axios from "axios";
//import login from "./login";
import { useAxios } from "../hooks/axios";

import "../css/referencia.css";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

function MonografiaEletronica() {
  const [error, setError] = useState(false);
  const { fetchData } = useAxios();
  const [inputFields, setInputFields] = useState([
    {
      id: 2,
      name: "titulo",
      label: "Título:",
     value: "",
      placeholder: "Ex: Titulo",
      type: "text",
    },

    {
      id: 3,
      name: "subtitulo",
     value: "",
      label: "Subtítulo:",
      placeholder: "Ex: Subtitulo",
      type: "text",
    },

    {
      id: 4,
      label: "Ano de publicação:",
      name: "anoPublicacao",
      value: "",
      placeholder: "Ex: 2005",
      type: "number",
    },
    {
      id: 5,
      name: "anoEntrega",
      label: "Ano de entrega:",
      value: "",
      placeholder: "Ex: 2004",
      type: "number",
    },

    {
      id: 6,
      name: "quantidadePaginas",
      label: "Quantidade de páginas:",
      value: "",
      placeholder: "Ex: 17",
      type: "number",
    },

    {
      id: 7,
      name: "cidade",
      label: "Cidade:",
      value: "",
      placeholder: "Ex: São Paulo",
      type: "text",
    },
    {
      id: 8,
      label: "Editora:",
      name: "editora",
     value: "",
      placeholder: "Ex: Editora",
      type: "text",
    },
    {
      id: 9,
      name: "edicao",
     value: "",
      label: "Edição:",
      placeholder: "Ex: 6",
      type: "number",
    },
    {
      id: 10,
      name: "descricaoDoSuporte",
      label: "Descrição do suporte:",
      value: "",
      placeholder: "Ex: CD-Rom",
      type: "text",
    },

    {
      id: 11,
      name: "autor",
      value: "",
      label: "Autor:",
      placeholder: "Ex: Maria Silva",
      type: "text",
    },
  ]);
  const [dataEnviarDados, setDataEnviarDados] = useState({
    tipo: "monografiaMeioEletronico",
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
      name: "novoAutor",
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
      <h1 id="referencia" className="centralizar-nome">
        Monografia em Meio
      </h1>
      <h1 id="referencia" className="centralizar-nome">Eletrônico</h1>
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

export default MonografiaEletronica;
