import "../css/referencia.css";
import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import UsuarioService from "../app/services/UsuarioService";
import { withRouter } from "react-router-dom";

class CadastroUsuario extends React.Component {
  state = {
    nome: "",
    email: "",
    senha: "",
    senhaConfirma: "",
  };

  // constructor() {
  //   super();
  //   this.service = new UsuarioService();
  // }

  // cadastrar = () => {
  //   const { nome, email, senha, senhaConfirma } = this.state;
  //   const usuario = { nome, email, senha, senhaConfirma };

  //   try {
  //     this.service.validarCampos(usuario);
  //   } catch (erro) {
  //     const msgs = erro.mensagemErro;
  //     msgs.forEach((msg) => mensagemErro(msg));
  //     return false;
  //   }

  //   this.service
  //     .cadastrarUsuario(usuario)
  //     .then((_response) => {
  //       mensagemSucesso(
  //         "Cadastro realizado! Faça login para acessar o AutoRef."
  //       );
  //       this.props.history.push("/login");
  //     })
  //     .catch((error) => {
  //       mensagemErro(error.response.data);
  //     });
  // };

  prepareLogin = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="row">
        <div
          className="col-md-6"
          style={{ position: "relative", left: "300px" }}
        >
          <Card title="CADASTRO">
            <div className="row">
              <span>{this.state.mensagemErro}</span>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="bs-component">
                  <fieldset>
                    <FormGroup label="Nome" htmlFor="inputNome">
                      <input
                        type="text"
                        value={this.state.nome}
                        onChange={(e) =>
                          this.setState({ nome: e.target.value })
                        }
                        className="form-control"
                        id="inputNome"
                        aria-describedby="emailHelp"
                        placeholder="Ex: Maria Silva"
                      ></input>
                    </FormGroup>
                    <FormGroup label="E-mail" htmlFor="exampleInputEmail1">
                      <input
                        type="email"
                        value={this.state.email}
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Ex: email@email.com"
                      />
                    </FormGroup>

                    <FormGroup label="Senha" htmlFor="exampleInputPassword1">
                      <input
                        type="Password"
                        value={this.state.senha}
                        onChange={(e) =>
                          this.setState({ senha: e.target.value })
                        }
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Ex: 123456"
                      />
                    </FormGroup>

                    <FormGroup
                      label="Confirme sua senha"
                      htmlFor="inputConfirmaSenha"
                    >
                      <input
                        type="password"
                        id="inputConfirmaSenha"
                        placeholder="Ex: 123456"
                        className="form-control"
                        name="senhaConfirma"
                        onChange={(e) =>
                          this.setState({ senhaConfirma: e.target.value })
                        }
                      />
                    </FormGroup>

                    <br></br>
                    <div className="centralizar">
                      <button
                        onClick={this.entrabr}
                        className="btn btn-success"
                      >
                        Cadastrar
                      </button>
                    </div>
                    <br></br>
                    <div className="centralizar">
                      <p>
                        Já possui uma conta?{" "}
                        <a className="clicavel" onClick={this.prepareLogin}>
                          Faça login
                        </a>
                      </p>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}
export default withRouter(CadastroUsuario);
