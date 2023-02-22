import React from "react";

import AutenticacaoService from "../app/services/AutenticacaoService";
import jwt from "jsonwebtoken";

export const ContextoAutenticacao = React.createContext();
export const ConsumidorAutenticacao = ContextoAutenticacao.Consumer;

const ProvedorAutenticacao = ContextoAutenticacao.Provider;

class RealizaAutenticacao extends React.Component {
  state = {
    usuarioAutenticado: null,
    estaAutenticado: false,
    estaCarregando: true,
  };

  iniciarSessao = (tokenDTO) => {
    const token = tokenDTO.token;
    const claims = jwt.decode(token);
    const usuario = {
      id: claims.userid,
      nome: claims.nome,
    };

    AutenticacaoService.realizarLogin(usuario, token);
    this.setState({ estaAutenticado: true, usuarioAutenticado: usuario });
  };

  encerrarSessao = () => {
    AutenticacaoService.removerUsuarioAutenticado();
    this.setState({ estaAutenticado: false, usuarioAutenticado: null });
  };

  async componentDidMount() {
    const estaAutenticado = AutenticacaoService.isUsuarioAutenticado();
    if (estaAutenticado) {
      const usuario = await AutenticacaoService.refreshSession();
      this.setState({
        estaAutenticado: true,
        usuarioAutenticado: usuario,
        estaCarregando: false,
      });
    } else {
      this.setState((previousState) => {
        return {
          ...previousState,
          estaCarregando: false,
        };
      });
    }
  }

  render() {
    if (this.state.estaCarregando) {
      return null;
    }

    const contexto = {
      usuarioAutenticado: this.state.usuarioAutenticado,
      estaAutenticado: this.state.estaAutenticado,
      iniciarSessao: this.iniciarSessao,
      encerrarSessao: this.encerrarSessao,
    };

    return (
      <ProvedorAutenticacao value={contexto}>
        {this.props.children}
      </ProvedorAutenticacao>
    );
  }
}

export default RealizaAutenticacao;
