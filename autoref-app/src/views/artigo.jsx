import React from "react";
//import FormGroup from "../components/form-group";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { useState } from "react";
import { useAxios } from "../hooks/axios";
//import login from "./login";

import "../css/referencia.css";

function Artigo() {

  const { fetchData } = useAxios();
  const [error, setError] = useState(false);
  const [inputFields, setInputFields] = useState([
    {
      id: 2,
      name: "titulo",
      value: "",
      placeholder: "Ex: Título do Artigo",
      type: "text",
      label: "Título:",
    },

    {
      id: 3,
      name: "subtituloArtigo",
      value: "",
      placeholder: "Ex: Subtítulo Artigo",
      type: "text",
      label: "Subtítulo:",
    },

    {
      id: 4,
      name: "tituloPeriodico",
      value: "",
      placeholder: "Ex: Título Periódico",
      type: "text",
      label: "Título do periódico:",
    },
    {
      id: 5,
      name: "subtituloPeriodico",
      value: "",
      placeholder: "Ex: Subtítulo Y",
      type: "text",
      label: "Subtítulo do periódico:",
    },

    {
      id: 6,
      name: "localPublicacao",
      value: "",
      placeholder: "Ex: São Paulo",
      type: "text",
      label: "Local de publicação:",
    },

    {
      id: 7,
      name: "paginaInicial",
      value: "",
      placeholder: "Ex: 10",
      type: "number",
      label: "Página inicial:",
    },
    {
      id: 8,
      name: "paginaFinal",
      value: "",
      placeholder: "Ex: 15",
      type: "text",
      label: "Página final:",
    },
    {
      id: 9,
      name: "editora",
      value: "",
      placeholder: "Ex: Editora X",
      type: "text",
      label: "Editora:",
    },
    {
      id: 10,
      name: "dataPublicacao",
      value: "",
      placeholder: "Ex: 2006",
      type: "text",
      label: "Data de publicação:",
    },
    {
      id: 11,
      name: "numeracaoAno",
      value: "",
      placeholder: "Ex: 9",
      type: "number",
      label: "Ano:",
    },
    {
      id: 12,
      name: "numeracaoVolume",
      value: "",
      placeholder: "Ex: 5",
      type: "text",
      label: "Volume:",
    },
    {
      id: 13,
      name: "edicao",
      value: "",
      placeholder: "Ex: 2",
      type: "text",
      label: "Edição:",
    },
    {
      id: 14,
      name: "numero",
      value: "",
      placeholder: "Ex: 1",
      type: "text",
      label: "Número:",
    },
    {
      id: 15,
      name: "tomo",
      value: "",
      placeholder: "Ex: 8",
      type: "text",
      label: "Tomo:",
    },

    {
      id: 16,
      name: "autor",
      label: "Autor:",
      value: "",
      placeholder: "Ex: Maria Silva",
      type: "text",
    },

  ]);
  const [dataEnviarDados, setDataEnviarDados] = useState({
    tipo: 'artigo',
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
    const id = inputFields.length + 1;
    let newfield = {
      id: id,
      name: "autor",
     value: "",
      label: "Novo autor:",
      placeholder: "Ex: Maria Silva",
      type: "text",
      label: "Novo autor: ",
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
      <h1 id="referencia" className="centralizar-nome">Artigo</h1>
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

export default Artigo;
