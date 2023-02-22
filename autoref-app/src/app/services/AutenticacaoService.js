import ArmazenamentoLocalService from "./ArmazenamentoLocalService";

import jwt from "jsonwebtoken";
import ApiService from "../ApiService";

export const USUARIO_LOGADO = "_usuario_logado";
export const TOKEN = "access_token";

export default class AutenticacaoService {
  static estaAutenticado() {
    const token = ArmazenamentoLocalService.obterItem(TOKEN);
    if (!token) {
      return false;
    }
    const decodedToken = jwt.decode(token);
    const expiration = decodedToken.exp;

    const isTokenInvalido = Date.now() >= expiration * 100000;

    return !isTokenInvalido;
  }

  static removerUsuarioAutenticado() {
    ArmazenamentoLocalService.removerItem(USUARIO_LOGADO);
    ArmazenamentoLocalService.removerItem(TOKEN);
  }

  static fazerLogin(usuario, token) {
    ArmazenamentoLocalService.adicionarItem(USUARIO_LOGADO, usuario);
    ArmazenamentoLocalService.adicionarItem(TOKEN, token);
    ApiService.registrarToken(token);
  }

  static obterUsuarioAutenticado() {
    return ArmazenamentoLocalService.obterItem(USUARIO_LOGADO);
  }

  static reiniciaSessao() {
    const token = ArmazenamentoLocalService.obterItem(TOKEN);
    const usuario = AutenticacaoService.obterUsuarioAutenticado();
    AutenticacaoService.fazerLogin(usuario, token);
    return usuario;
  }
}
