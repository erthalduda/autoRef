import ApiService from "../ApiService";

import Excecao from "../excecoes/Excecoes";

class UsuarioService extends ApiService {
  constructor() {
    super("/usuario");
  }

  cadastrarUsuario(usuario) {
    return this.post("/cadastro", usuario);
  }

  loginUsuario(dados) {
    return this.post("/login", dados);
  }

  excluirUsuario(usuario) {
    return this.delete(`/excluir/${usuario.id}`);
  }

  atualizaUsuario(usuario) {
    return this.put(`/editar/${usuario.id}`, { usuario });
  }

  rankingUsuarios() {
    return this.get("/ranking");
  }

  validarCampos(usuario) {
    const erro = [];

    if (!usuario.nome) {
      erro.push("O campo nome é obrigatório.");
    }

    if (!usuario.email) {
      erro.push("O campo e-mail é obrigatório.");
    } else if (!usuario.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
      erros.push("O e-mail fornecido deve ser um e-mail válido.");
    }

    if (!usuario.senha || !usuario.senhaRepeticao) {
      erros.push("Confirme sua senha.");
    } else if (usuario.senha !== usuario.senhaRepeticao) {
      erros.push("As senhas não coincidem");
    }

    if (erro && erro.length > 0) {
      throw new Excecao(erro);
    }
  }
}
export default UsuarioService;
