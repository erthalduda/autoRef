import React from "react";
//import FormGroup from "../components/form-group";

import { useState } from "react";
import axios from "axios";
//import login from "./login";

import "../css/referencia.css";
import Sidebar from "../components/sidebar";

function Monografia() {
  const [inputFields, setInputFields] = useState([
    {
      id: 1,
      name: "tipo",
      value: "monografia",
      type: "hidden",
    },
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
      placeholder: "Ex: Ano de Publicação",
      type: "number",
    },
    {
      id: 5,
      name: "anoEntrega",
      label: "Ano de entrega:",
      value: "",
      placeholder: "Ex: Ano de entrega",
      type: "number",
    },

    {
      id: 6,
      name: "quantidadePaginas",
      label: "Quantidade de páginas:",
      value: "",
      placeholder: "Ex: Quantidade da páginas",
      type: "number",
    },

    {
      id: 7,
      name: "cidade",
      label: "Cidade:",
      value: "",
      placeholder: "Ex: Cidade",
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
      placeholder: "Ex: Edição",
      type: "text",
    },

    {
      id: 10,
      name: "autor",
      label: "Autor:",
      value: "",
      placeholder: "Ex: Autor",
      type: "text",
    },
  ]);

  const onSubmit = async (event) => {
    event.preventDefault();
    axios.post("https://localhost/3000/referencias/cadastrar", inputFields);
    console.log(inputFields);
  };

  const addFields = () => {
    const id = inputFields.length + 1;
    let newfield = {
      id: id,
      name: "autor",
      value: "",
      label: "Autor:",
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
      <h1 id="referencia">Monografia</h1>
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

export default Monografia;
