import React from "react";
//import FormGroup from "../components/form-group";

import { useState } from "react";
import axios from "axios";
//import login from "./login";
import { useAxios } from "../hooks/axios";
import "../css/referencia.css";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

function Website() {
  const { fetchData } = useAxios();
  const [error, setError] = useState(false);
  const [inputFields, setInputFields] = useState([
   
    {
      id: 2,
      name: "titulo",
      value: "",
      placeholder: "Ex: Titulo",
      type: "text",
      label: "Título:"
    },

    {
      id: 3,
      name: "nomeSite",
      value: "",
      placeholder: "Ex: Nome do site",
      type: "text",
      label: "Nome do site:"
    },

    {
      id: 4,
      name: "url",
      value: "",
      placeholder: "Ex: Url",
      type: "text",
      label: "URL:"
    },
    {
      id: 5,
      name: "dataAcesso",
      value: "",
      placeholder: "Ex: Data de acesso",
      type:  "date",
      label: "Data de acesso:"
    },
    {
      id: 6,
      name: "anoPublicacao",
      value: "",
      placeholder: "Ex: Ano de publicação",
      type: "number",
      label: "Ano de publicação:"
    },

    {
      id: 7,
      name: "autor",
      value: "",
      placeholder: "Ex: Autor",
      type: "text",
      label: "Autor:"
    },
  ]);

  const [dataEnviarDados, setDataEnviarDados] = useState({
    tipo: 'website',
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
      <h1 id="referencia">Website</h1>
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

export default Website;
