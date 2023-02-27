import React from "react";
//import FormGroup from "../components/form-group";
import { useAxios } from "../hooks/axios";
import { useState } from "react";
import axios from "axios";
//import login from "./login";

import "../css/referencia.css";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

function Trabalho() {
  const { fetchData } = useAxios();
  const [error, setError] = useState(false);
  const [inputFields, setInputFields] = useState([
    {
      id: 1,
      label: "Título:",
      name: "titulo",
      value: "",
      placeholder: "Ex: Titulo",
      type: "text",
    },

    {
      id: 2,
      name: "subtitulo",
      value: "",
      label: "Subtítulo:",
      placeholder: "Ex: Subtitulo",
      type: "text",
    },

    {
      id: 3,
      name: "anoDeposito",
      value: "",
      label: "Ano de depósito:",
      placeholder: "Ex: Ano de depósito",
      type: "number",
    },
    {
      id: 4,
      name: "anoEntrega",
      label: "Ano de entrega:",
      value: "",
      placeholder: "Ex: Ano de entrega",
      type: "number",
    },

    {
      id: 5,
      name: "tipoTrabalho",
      value: "",
      label: "Tipo de trabalho:",
      placeholder: "Ex: TCC",
      type: "text",
    },

    {
      id: 6,
      name: "grauFormacao",
      label: "Grau de formação:",
      value: "",
      placeholder: "Ex: Mestrado",
      type: "text",
    },
    {
      id: 7,
      name: "curso",
      value: "",
      label: "Curso:",
      placeholder: "Ex: T.I",
      type: "text",
    },
    {
      id: 8,
      name: "vinculacaoAcademica",
      value: "",
      label: "Vinculação Acadêmico:",
      placeholder: "Ex: ",
      type: "text",
    },

    {
      id: 9,
      name: "anoDefesa",
      value: "",
      label: "Ano de defesa:",
      placeholder: "Ex: 2012",
      type: "number",
    },
    {
      id: 9,
      name: "anoDefesa",
      value: "",
      label: "Ano de defesa:",
      placeholder: "Ex: 2012",
      type: "number",
    },

    {
      id: 9,
      name: "autor",
      label: "Autor:",
      value: "",
      placeholder: "Ex: Autor",
      type: "text",
    },
  ]);
  const [dataEnviarDados, setDataEnviarDados] = useState({
    tipo: "trabalhoAcademico",
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
      <h1 id="referencia">Trabalho Acadêmico</h1>
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

export default Trabalho;
