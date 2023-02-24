import React from "react";
//import FormGroup from "../components/form-group";

import { useState } from "react";
import axios from "axios";
//import login from "./login";

import "../css/referencia.css";
import Sidebar from "../components/sidebar";

function ParteMonografia() {
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
      label: "Título:"
    },

    {
      id: 3,
      name: "tituloParte",
      value: "",
      placeholder: "Ex: Titulo da parte",
      type: "text",
      label: "Título da parte:"
    },

    {
      id: 4,
      name: "subtitulo",
      value: "",
      placeholder: "Ex: Subtitulo",
      type: "text",
      label: "Subtítulo:"
    },

    {
      id: 5,
      name: "anoPublicacao",
      value: "",
      placeholder: "Ex: Ano de Publicação",
      type: "number",
      label: "Ano de publicação:"
    },
    {
      id: 6,
      name: "anoEntrega",
      value: "",
      placeholder: "Ex: Ano de entrega",
      type: "number",
      label: "Ano de entrega:"
    },

    {
      id: 7,
      name: "volume",
      value: "",
      placeholder: "Ex: Volume",
      type: "number",
      label: "Volume:"
    },

    {
      id: 8,
      name: "secao",
      value: "",
      placeholder: "Ex: Seção",
      type: "number",
      label: "Seção:"
    },
    {
      id: 9,
      name: "capitulo",
      value: "",
      placeholder: "Ex: Capitulo",
      type: "number",
      label: "Capítulo:"
    },

    {
      id: 10,
      name: "quantidadePaginas",
      value: "",
      placeholder: "Ex: Quantidade da páginas",
      type: "number",
      label: "Quantidade de páginas:"
    },

    {
      id: 11,
      name: "cidade",
      value: "",
      placeholder: "Ex: Cidade",
      type: "text",
      label: "Cidade:"
    },
    {
      id: 12,
      name: "editora",
      value: "",
      placeholder: "Ex: Editora",
      type: "text",
      label: "Editora:"
    },
    {
      id: 13,
      name: "edicao",
      value: "",
      placeholder: "Ex: Edição",
      type: "text",
      label: "Edição:"
    },

    {
      id: 14,
      name: "autorParte",
      value: "",
      placeholder: "Ex: Autor da parte",
      type: "text",
      label: "Autor da parte:"
    },

    {
      id: 15,
      name: "autor",
      value: "",
      placeholder: "Ex: Autor",
      type: "text",
      label: "Autor:"
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
      placeholder: "Ex: Autor",
      type: "text",
      label: "Novo autor:"
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
      <h1 id="referencia">Parte de Monografia</h1>
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
