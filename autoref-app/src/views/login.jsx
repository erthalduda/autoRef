import React from "react";
import Card from "../components/card";
import "../custom.css";
import { useAxios } from "../hooks/axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useLocalStorage } from "../hooks/local_storage";
import axios from "axios";


const Login = () => {
  const history = useHistory();
  const [mensagemErro, setMensagemErro] = useState ("Error ao logar!")
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

  const localStorage = useLocalStorage()

  const onSubmit = async (event) => {
    const axiosParams = {
      baseURL: "http://localhost:8080",
      method: "POST",
      url: "/login/usuario",
      auth: infosLogin,
    };
    event.preventDefault();

    const { response, error } = await fetchData(axiosParams, false);
    const teste = await axios(axiosParams)
    console.log(teste)
   
    if (response && !error) {
      const token = localStorage.getHeader(response, "X-Auth-Token")
     
      localStorage.save("token", token)
      
      localStorage.save("userData", JSON.stringify(response.data))
    } else if (error) {
      setError("Falha ao logar!");
    }
    
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
                  
                    </button>
                    
                  </div>
                  
                  <div>
                    <p>
                      Não possui uma conta?{" "}
                      <a className="clicavel" href="#/cadastro">
                        Faça cadastro
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
    )
  
}

export default Login;
