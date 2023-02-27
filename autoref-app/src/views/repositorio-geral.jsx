import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";

import "../css/referencia.css";
import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar";
function RepositorioGeral() {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputFields, setInputFields] = useState([
    {
      id: 1,
      name: "pesquisa",
      label: "Pesquisa:",
      value: "",
      placeholder: "Ex: Mário Quintana",
      type: "text",
    },
  ]);
  const [results, setResults] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(inputFields[0].value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`http://localhost:8080/referencias/buscar/geral/${searchTerm}`);
      setResults(data);
    };
    fetchData();
  }, [searchTerm]);

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

    setInputFields(data);
  };

  return (
    <>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <h1 id="referencia" className="centralizar-nome">
        Repositório Geral
      </h1>
      <div>
        <div className="centralizar">
          <form onSubmit={handleFormSubmit}>
            {inputFields.map((input, index) => {
              return (
                <div
                  key={index}
                  style={{ fontWeight: "bold" }}
                  className="centralizar"
                >
                  {input.label != null ? <div>{input.label}</div> : <></>}

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



            <div className="centralizar">
              <button type="submit" className="btn btn-success">
                Pesquisar
              </button>
            </div>
          </form>
        </div>
      </div>

      <table className="table">
<thead>
            <tr>
              <th scope="col">REFERÊNCIA</th>
              <th scope="col">CIT. DIRETA</th>
              <th scope="col">CIT. INDIRETA</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>1</td>
              <td> RODRIGO REMOR </td>
              <td>4500XP</td>
            </tr>{" "}
            <tr>
              <td>2</td>
              <td> LOURENÇO BASSO </td>
              <td>3200XP</td>
            </tr>{" "}
            <tr>
              <td>3</td>
              <td> WILLIAM HOLZ </td>
              <td> 3000XP</td>
            </tr>
            <tr>
              <td>3</td>
              <td> EDUARDA ERTHAL </td>
              <td> 2800XP</td>
            </tr>
          </tbody>
        </table>

      <div>
        <ul>
          {results.map((result) => (
            <li key={result.id}>{result.nome}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default RepositorioGeral;
