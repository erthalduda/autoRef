import React, { useState } from "react"

export default function (props) {
  let [authMode, setAuthMode] = useState("entrar")

  const changeAuthMode = () => {
    setAuthMode(authMode === "entrar" ? "cadastro" : "entrar")
  }


  function handleClickEntrar() {
    
    var formData = new FormData();

    // Send data to the backend via POST
    fetch('http://localhost:8080/usuario/login', {

      method: 'POST', 
      mode: 'cors', 
      body: formData // body data type must match "Content-Type" header

    })
  }

  function handleClickCadastro() {
    
    var formData = new FormData();

    // Send data to the backend via POST
    fetch('http://localhost:8080/usuario/cadastro', {

      method: 'POST', 
      mode: 'cors', 
      body: formData // body data type must match "Content-Type" header

    })
  }


  if (authMode === "entrar") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Login</h3>
            <div className="text-center">
              Ainda não possui uma conta?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Cadastre-se!
              </span>
            </div>
            <div className="form-group mt-3">
              <label>E-mail</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Ex: email@email.com"
              />
            </div>
            <div className="form-group mt-3">
              <label>Senha</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Ex: 123456"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={handleClickEntrar}>
                Entrar
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Cadastro</h3>
          <div className="text-center">
          Já possui uma conta?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Faça login!
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Nome</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Ex: Maria da Silva"
            />
          </div>
          <div className="form-group mt-3">
            <label>E-mail</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Ex: email@email.com"
            />
          </div>
          <div className="form-group mt-3">
            <label>Senha</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Ex: 123456"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={handleClickCadastro} >
              Cadastrar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}