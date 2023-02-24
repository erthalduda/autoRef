import React from "react";
import Card from "../components/card";
import "../custom.css";
import { useAxios } from "../hooks/axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const history = useHistory();
<<<<<<< HEAD
  const [mensagemErro, setMensagemErro] = useState("Error ao logar!");
=======
  const [mensagemErro, setMensagemErro] = useState ("Error ao logar!")
>>>>>>> 416b8907f41bba2310c6f452b4a3ece57fb418f4
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
  const [infosLogin, setinfosLogin] = useState({
    email: "",
    senha: "",
  });

  const [error, setError] = useState();

  const onSubmit = async (event) => {
    const axiosParams = {
      baseURL: "http://localhost:8080",
      method: "POST",
      url: "/login/usuario",
      data: infosLogin,
    };
    event.preventDefault();

    const { response, error } = fetchData(axiosParams, false);

    if (response && !error) {
      //navigate
    } else if (error) {
      setError("Falha ao logar!");
    }
    console.log(infosLogin);
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
      setinfosLogin({ ...infosLogin, email: inputFiltrado.value });
    }

    if (inputFiltrado.id === 2) {
      setinfosLogin({ ...infosLogin, senha: inputFiltrado.value });
    }

    setInputFields(data);
  };

  const prepareLogin = () => {
    history.push("/login");
  };

<<<<<<< HEAD
  return (
    <div className="row">
      <div className="col-md-6" style={{ position: "relative", left: "300px" }}>
        <Card title="LOGIN">
          <div className="row">
            <div className="col-lg-12">
              <div className="bs-component">
=======
  
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

>>>>>>> 416b8907f41bba2310c6f452b4a3ece57fb418f4
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
                  {error && <div>{mensagemErro}</div>}
                  <div className="sla">
                    <button type="submit" className="btn btn-success">
                      LOGIN
<<<<<<< HEAD
                    </button>
                  </div>

=======
                  
                    </button>
                    
                  </div>
                  
>>>>>>> 416b8907f41bba2310c6f452b4a3ece57fb418f4
                  <div>
                    <p>
                      Não possui uma conta?{" "}
                      <a className="clicavel" href="#/cadastro">
                        Faça cadastro
                      </a>
                    </p>
                  </div>
                </form>
<<<<<<< HEAD
=======
                
                </div>
>>>>>>> 416b8907f41bba2310c6f452b4a3ece57fb418f4
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
