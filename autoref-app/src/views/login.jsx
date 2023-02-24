import React from "react";
import Card from "../components/card";
import "../custom.css";
import { useAxios } from "../hooks/axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";


const Login = () => {
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
    senha: "",
  });

  const [error, setError] = useState();

  const onSubmit = async (event) => {
    const axiosParams = {
      baseURL: "http://localhost:8080",
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
      setinfosCadastro({ ...infosCadastro, senha: inputFiltrado.value });
    }

    setInputFields(data);
  };

  const prepareLogin = () => {
    history.push("/login");
  };

  
    return (
      <div className="row">
        <div
          className="col-md-6"
          style={{ position: "relative", left: "300px" }}
        >
          <Card title="LOGIN">
            <div className="row">
              <div className="col-lg-12">
                <div className="bs-component">
                
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    )
  
}

export default Login;
