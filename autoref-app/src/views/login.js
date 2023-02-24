import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "../custom.css";
import ArmazentamentoLocalService from "../app/services/ArmazenamentoLocalService";
import UsuarioService from "../app/services/UsuarioService";
import { AuthContext } from "../main/realizaAutenticacao";
class Login extends React.Component {
  state = {
    email: "",
    senha: "",
  };

  constructor() {
    super();
    this.service = new UsuarioService();
  }

  entrabr = () => {
    axios
      .post("http://localhost:8080/usuario/login", {
        email: this.state.email,
        senha: this.state.senha,
      })
      .then((response) => {
        this.context.iniciarSessao(response.data);
        this.props.history.push("/home");
      })
      .catch((erro) => {
        this.setState({ mensagemErro: erro.response.data });
      });
  };

  prepareCadastrar = () => {
    this.props.history.push("/cadastro");
  };

  render() {
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
                  <fieldset>
                    <FormGroup label="E-mail " htmlFor="exampleInputEmail1">
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
                      <br></br>
                    </FormGroup>
                    <div className="erro">{this.state.mensagemErro}</div>
                    <br></br>
                    <div className="centralizar">
                      <button
                        onClick={this.entrabr}
                        className="btn btn-success"
                      >
                        Entrar
                      </button>
                    </div>
                    <div className="centralizar">
                      <p>
                        Ainda não possui uma conta?{" "}
                        <a className="clicavel" onClick={this.prepareCadastrar}>
                          Cadastre-se
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

export default withRouter(Login);
