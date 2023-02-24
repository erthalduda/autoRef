import "../css/referencia.css";
import React from "react";
import Card from "../components/card";
import { useState } from "react";
import { Axios } from "axios";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { useAxios } from "../hooks/axios";
//import { mensagemSucesso, mensagemErro } from '../components/toastifyClasse'

const CadastroUsuario = () => {
  const history = useHistory();
  const { fetchData } = useAxios();
  const [inputFields, setInputFields] = useState([
    {
      id: 1,
      name: "email",
      value: "",
      placeholder: "Ex: email@email.com",
      type: "text",
      label: "E-mail:",
    },
    {
      id: 2,
      name: "name",
      value: "",
      placeholder: "Ex: Maria Silva",
      type: "text",
      label: "Nome:",
    },
    {
      id: 3,
      name: "senha",
      value: "",
      type: "text",
      label: "Senha:",
      placeholder: "Ex: 123456",
      type: "password",
    },
  ]);
  const [infosCadastro, setinfosCadastro] = useState({
    email: "",
    nome: "",
    senha: "",
  });

  const [error, setError] = useState();

  const onSubmit = async (event) => {
    const axiosParams = {
      baseURL: "https://localhost/3000",
      method: "POST",
      url: "/usuario/cadastro",
      data: infosCadastro,
    };
    event.preventDefault();

    const { response, error } = fetchData(axiosParams, false);

    if (response && !error) {
      //navigate
    } else if (error) {
      setError("Falha ao cadastrar!");
    }
    console.log(infosCadastro);
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

    if (inputFiltrado.id === 1) {
      setinfosCadastro({ ...infosCadastro, email: inputFiltrado.value });
    }
    if (inputFiltrado.id === 2) {
      setinfosCadastro({ ...infosCadastro, nome: inputFiltrado.value });
    }
    if (inputFiltrado.id === 3) {
      setinfosCadastro({ ...infosCadastro, senha: inputFiltrado.value });
    }

    setInputFields(data);
  };

  const prepareLogin = () => {
    history.push("/login");
  };

  return (
    <div className="row">
      <div className="col-md-6" style={{ position: "relative", left: "300px" }}>
        <Card title="CADASTRO">
          <div className="row"></div>
          <div className="row">
            <div className="col-lg-12">
              <div className="bs-component">
                <form onSubmit={onSubmit}>
                  {inputFields.map((input, index) => {
                    return (
                      <div key={index}>
                        {input.label != null ? <>{input.label}</> : <>null</>}

                        <input
                          type={input.type}
                          key={input.id}
                          id={input.id}
                          value={input.value}
                          name={input.name}
                          placeholder={input.placeholder}
                          className="form-control"
                          onChange={(e) => handleFormChange(input.id, e)}
                        />
                      </div>
                    );
                  })}
                  <br></br>
                  <div className="sla">
                    <button type="submit" className="btn btn-success">
                      CADASTRO
                    </button>
                  </div>
                  <div>
                    <p>
                      Já possui uma conta?{" "}
                      <a className="clicavel" href="#/login">
                        Faça login
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CadastroUsuario;
