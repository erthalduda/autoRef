import React from "react";
//import FormGroup from "../components/form-group";

import { useState } from "react";
import axios from "axios";
//import login from "./login";

import "../css/referencia.css";
import Sidebar from "../components/sidebar";

function Website() {
  const [inputFields, setInputFields] = useState([
    {
      id: 1,
      name: "tipo",
      value: "website",
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
      type: "date",
      label: "Data de acesso:"
    },

    {
      id: 6,
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

  //const onChangeAutor = (value, autor) => {

  //const valor = value.target.value;
  //let autorFiltrado = inputFields.find(a => {
  // return autor?.id === a?.id
  // })

  //  console.log(autorFiltrado)
  //    autorFiltrado.autor = valor;
  //
  //    console.log(inputFields)
  //     this.setState({ autor: autor.target.value })
  //  }

  return (
    <>
      <Sidebar></Sidebar>
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
