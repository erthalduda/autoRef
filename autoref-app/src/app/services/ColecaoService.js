import ApiService from "../ApiService";

import Excecao from "../excecoes/Excecoes";

class ColecaoService extends ApiService {
  constructor() {
    super("/colecoes");
  }

  cadastrarColecao(colecao) {
    return this.post("cadastrar", colecao);
  }

  atualizaColecao(colecao) {
    return this.put(`/${colecao.id}/editar`, { colecao });
  }

  excluiColecao(colecao) {
    return this.delete(`/${colecao.id}/excluir`);
  }

  adicionaReferencia(colecao, referencia) {
    return this.put(`/${colecao.id}/adicionar/${referencia.id}`);
  }

  removeReferencia(colecao, referencia) {
    return this.put(`/${colecao.id}/remover/${referencia.id}`);
  }

  buscarPorUsuario(usuario) {
    return this.get(`/buscar/${usuario.id}`);
  }

  validaColecao(colecao) {
    const erro = [];

    if (!colecao.nome) {
      erro.push("Dê um nome para sua coleção.");
    }

    if (erro && erro.length > 0) {
      throw new Excecao(erro);
    }
  }
}
