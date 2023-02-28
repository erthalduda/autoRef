import React from "react";
//import FormGroup from "../components/form-group";

import { useState } from "react";
import { useAxios } from "../hooks/axios";
//import login from "./login";

import "../css/referencia.css";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

function ParteMonografia() {
  const { fetchData } = useAxios();
  const [error, setError] = useState(false);
  const [inputFields, setInputFields] = useState([
 
    {
      id: 2,
      name: "titulo",
      value: "",
      placeholder: "Ex: Título",
      type: "text",
      label: "Título:"
    },

    {
      id: 3,
      name: "subtitulo",
      value: "",
      placeholder: "Ex: Subtítulo",
      type: "text",
      label: "Subtítulo:"
    },

    {
      id: 4,
      name: "tituloParte",
      value: "",
      placeholder: "Ex: Título da parte",
      type: "text",
      label: "Título da parte:"
    },

    {
      id: 5,
      name: "anoPublicacao",
      value: "",
      placeholder: "Ex: 2004",
      type: "number",
      label: "Ano de publicação:"
    },
    {
      id: 6,
      name: "anoEntrega",
      value: "",
      placeholder: "Ex: 2005",
      type: "number",
      label: "Ano de entrega:"
    },

    {
      id: 7,
      name: "volume",
      value: "",
      placeholder: "Ex: 1",
      type: "number",
      label: "Volume:"
    },

    {
      id: 8,
      name: "secao",
      value: "",
      placeholder: "Ex: 5",
      type: "number",
      label: "Seção:"
    },
    {
      id: 9,
      name: "capitulo",
      value: "",
      placeholder: "Ex: 7",
      type: "number",
      label: "Capítulo:"
    },

    {
      id: 10,
      name: "quantidadePaginas",
      value: "",
      placeholder: "Ex: 28",
      type: "number",
      label: "Quantidade de páginas:"
    },

    {
      id: 11,
      name: "cidade",
      value: "",
      placeholder: "Ex: São Paulo",
      type: "text",
      label: "Cidade:"
    },
    {
      id: 12,
      name: "editora",
      value: "",
      placeholder: "Ex: Editora A",
      type: "text",
      label: "Editora:"
    },
    {
      id: 13,
      name: "edicao",
      value: "",
      placeholder: "Ex: 9",
      type: "text",
      label: "Edição:"
    },

    {
      id: 14,
      name: "autorParte",
      value: "",
      placeholder: "Ex: João Costa",
      type: "text",
      label: "Autor da parte:"
    },

    {
      id: 15,
      name: "autor",
      value: "",
      placeholder: "Ex: Maria Silva",
      type: "text",
      label: "Autor principal:"
    },
  ]);
  const [dataEnviarDados, setDataEnviarDados] = useState({
    tipo: 'parteMonografia',
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
  };

  return (
    <>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <h1 id="referencia" className="centralizar-nome">Parte de Monografia</h1>
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

export default ParteMonografia;
