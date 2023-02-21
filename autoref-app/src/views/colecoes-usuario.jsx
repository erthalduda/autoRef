import React from "react";
import { useState } from "react";
import axios from "axios";
import "../css/referencia.css";
import Sidebar from "../components/sidebar";

function ColecoesUsuario() {
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
      value: "",
      placeholder: "Ex: Titulo",
      type: "text",
    },

    {
      id: 3,
      name: "subtitulo",
      value: "",
      placeholder: "Ex: Subtitulo",
      type: "text",
    },

    {
      id: 4,
      name: "anoPublicacao",
      value: "",
      placeholder: "Ex: Ano de Publicação",
      type: "number",
    },
    {
      id: 5,
      name: "anoEntrega",
      value: "",
      placeholder: "Ex: Ano de entrega",
      type: "number",
    },

    {
      id: 6,
      name: "quantiPgs",
      value: "",
      placeholder: "Ex: Quantidade da páginas",
      type: "number",
    },

    {
      id: 7,
      name: "cidade",
      value: "",
      placeholder: "Ex: Cidade",
      type: "text",
    },
    {
      id: 8,
      name: "editora",
      value: "",
      placeholder: "Ex: Editora",
      type: "text",
    },
    {
      id: 9,
      name: "edicao",
      value: "",
      placeholder: "Ex: Edição",
      type: "text",
    },
    {
      id: 10,
      name: "descricao",
      value: "",
      placeholder: "Ex: Descrição de suporte",
      type: "text",
    },

    {
      id: 11,
      name: "autor",
      value: "",
      placeholder: "Ex: Autor",
      type: "text",
    },
  ]);

  const onSubmit = async (event) => {
    event.preventDefault();
    axios.post("https://localhost/8080/colecoes/cadastrar", inputFields);
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
      <h1 id="referencia">Nova Coleção</h1>
      <div className="form-group-ref">
        <form onSubmit={onSubmit}>
          {inputFields.map((input, index) => {
            return (
              <div key={index}>
                <input
                  type={input.type}
                  key={input.id}
                  id={input.id}
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
              +
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ColecoesUsuario;
