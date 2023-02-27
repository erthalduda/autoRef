import React from "react";
//import FormGroup from "../components/form-group";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { useState } from "react";
import axios from "axios";
//import login from "./login";

import "../css/referencia.css";

function Artigo() {
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
      name: "paginaInicial",
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
      name: "ano",
      value: "",
      placeholder: "Ex: 9",
      type: "number",
      label: "Ano:",
    },
    {
      id: 12,
      name: "volume",
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
      value: "",
      placeholder: "Ex: Maria Silva",
      type: "text",
      label: "Autor:",
    },
    {
      id: 1,
      name: "tipo",
      value: "artigo",
      type: "hidden",
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
