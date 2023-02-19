import React from "react";
//import FormGroup from "../components/form-group";

import { useState } from "react";
import axios from "axios";
//import login from "./login";

import "../css/referencia.css";

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
      name: "autor",
      value: "",
      placeholder: "Ex: Autor",
      type: "text"
    }

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
     <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">

<div className="position-sticky">
    <div className="list-group list-group-flush mx-3 mt-4">

        <a href="#/referencias"
            className="list-group-item list-group-item-action py-2 ripple"
            aria-current="true">

            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
            <span>REFERENCIAS</span>

        </a>

        <a href="#"
            className="list-group-item list-group-item-action py-2 ripple"
            aria-current="true">

            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
            <span>BUSCAR REFERENCIAS</span>

        </a>
        <a href="#"
            className="list-group-item list-group-item-action py-2 ripple"
            aria-current="true">

            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
            <span>COLEÇÕES</span>

        </a>
        <a href="#"
            className="list-group-item list-group-item-action py-2 ripple"
            aria-current="true">

            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
            <span>CONQUISTAS</span>

        </a>
        <a href="#"
            className="list-group-item list-group-item-action py-2 ripple"
            aria-current="true">

            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
            <span>RANKING</span>

        </a>
        <a href="#"
            className="list-group-item list-group-item-action py-2 ripple"
            aria-current="true">

            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
            <span>FAQ</span>

        </a>
        <a href="#"
            className="list-group-item list-group-item-action py-2 ripple"
            aria-current="true">

            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
            <span>EDITAR PERFIL</span>

        </a>

    </div>



</div>
</nav >
      <h1 id="referencia">Monografia</h1>
      <div className="form-group">
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
