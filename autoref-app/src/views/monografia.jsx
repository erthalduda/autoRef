import React from "react";
//import FormGroup from "../components/form-group";

import { useState } from "react";
import axios from "axios";
//import login from "./login";

import "../css/referencia.css";
import Sidebar from "../components/sidebar";
import { useAxios } from "../hooks/axios";

function Monografia() {
  const { fetchData } = useAxios();
  const [error, setError] = useState(false);

  const [inputFields, setInputFields] = useState([
    
    {
      id: 2,
      name: "titulo",
      label: "Título:",
      value: null,
      placeholder: "Ex: Titulo",
      type: "text",
    },

    {
      id: 3,
      name: "subtitulo",
      value: null,
      label: "Subtítulo:",
      placeholder: "Ex: Subtitulo",
      type: "text",
    },

    {
      id: 4,
      label: "Ano de publicação:",
      name: "anoPublicacao",
      value: null,
      placeholder: "Ex: Ano de Publicação",
      type: "number",
    },
    {
      id: 5,
      name: "anoEntrega",
      label: "Ano de entrega:",
      value: null,
      placeholder: "Ex: Ano de entrega",
      type: "number",
    },

    {
      id: 6,
      name: "quantidadePaginas",
      label: "Quantidade de páginas:",
      value: null,
      placeholder: "Ex: Quantidade da páginas",
      type: "number",
    },

    {
      id: 7,
      name: "cidade",
      label: "Cidade:",
      value: null,
      placeholder: "Ex: Cidade",
      type: "text",
    },
    {
      id: 8,
      label: "Editora:",
      name: "editora",
      value: null,
      placeholder: "Ex: Editora",
      type: "text",
    },
    {
      id: 9,
      name: "edicao",
      value: null,
      label: "Edição:",
      placeholder: "Ex: Edição",
      type: "text",
    },

    {
      id: 10,
      name: "autor",
      label: "Autor:",
      value: null,
      placeholder: "Ex: Autor",
      type: "text",
    },
  ]);

  const [dataEnviarDados, setDataEnviarDaddos] = useState({tipo:'monografia', autor:[]});
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
      value: null,
      label: "Novo autor:",
      placeholder: "Ex: Autor",
      type: "text",
    };
    setInputFields([...inputFields, newfield]);
    console.log(inputFields);
  };

  const handleFormChange = (id, event) => {
    let data = [...inputFields];
    const inputFiltrado = data.find((input) => input.id === id);

    inputFiltrado.value = event.target.value;

    if(inputFiltrado.name == 'autor'){

      const autorSelecionado = autoresCriados.find((a) =>a.id === id );

      if(autorSelecionado){
        
        autorSelecionado.nome = inputFiltrado.value;
      }else {
        autoresCriados.push({id:id, nome:inputFiltrado.value})
      }
      console.log(autoresCriados);
    }else {
      setDataEnviarDaddos({...dataEnviarDados,[inputFiltrado.name]:inputFiltrado.value})
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
      <h1 id="referencia">Monografia</h1>
      <br></br>
      <div className="form-group-ref">
        <form >
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
            <button onClick={onSubmit} className="btn btn-success">
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

export default Monografia;
