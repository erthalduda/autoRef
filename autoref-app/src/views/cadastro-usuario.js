import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";

import { withRouter } from "react-router-dom";

class CadastroUsuario extends React.Component {
  state = {
    nome: "",
    email: "",
    senha: "",
    senhaConfirma: "",
  };
  cadastrar = () => {
    console.log(this.state);
  };

  prepareLogin = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="row">
        <div
          className="col-md-6"
          style={{ position: "relative", left: "300px" }}
        ></div>
        <Card tittle="Cadastro ">
          <div className="row">
            <div className="col-lg-12">
              <div className="bs-component">
                <FormGroup label="Nome " htmlFor="inputNome">
                  <input
                    type="text"
                    id="inputNome"
                    placeholder="Ex: Maria Silva"
                    className="form-control"
                    name="nome"
                    onChange={(e) => this.setState({ nome: e.target.value })}
                  />
                </FormGroup>

                <FormGroup label="Email " htmlFor="inputEmail">
                  <input
                    type="text"
                    placeholder="Ex: email@email.com"
                    id="inputEmail"
                    className="form-control"
                    name="email"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </FormGroup>

                <FormGroup label="Senha " htmlFor="inputSenha">
                  <input
                    type="password"
                    placeholder="Ex: 123456"
                    id="inputSenha"
                    className="form-control"
                    name="senha"
                    onChange={(e) => this.setState({ senha: e.target.value })}
                  />
                </FormGroup>

                <FormGroup
                  label="Confirme a sua senha "
                  htmlFor="inputConfirmaSenha"
                >
                  <input
                    type="password"
                    id="inputConfirmaSenha"
                    placeholder="Ex: 123456"
                    className="form-control"
                    name="senha"
                    onChange={(e) =>
                      this.setState({ senhaConfirma: e.target.value })
                    }
                  />
                </FormGroup>
                <br></br>
                <div className="centralizar">
                  <button onClick={this.cadastrar} className="btn btn-success">
                    Cadastrar
                  </button>
                </div>
                <br></br>
               <p className="centralizar">Já possui uma conta?</p>
                <div className="centralizar">
                  <button
                    onClick={this.prepareLogin}
                    className="btn btn-success"
                  >
                    Fazer login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
export default withRouter(CadastroUsuario);
