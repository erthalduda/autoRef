import ApiService from "../ApiService";

// import Excecao from "../excecoes/Excecoes";

export default class ReferenciaService extends ApiService {
  constructor() {
    super("/referencias");
  }

  cadastrarReferencia(referencia) {
    return this.post("/cadastrar", referencia);
  }

  buscaReferenciaRepositorioGeral(pesquisa) {
    return this.get(`/buscar/geral/${pesquisa}`);
  }

  buscaTodasReferenciasRepositorioPrivado(usuario) {
    return this.get(`/buscar/privado/${usuario.id}`);
  }

  // buscaReferenciaEspecificaRepositorioPrivado(usuario, pesquisa) {
  //   return this.get(`/buscar/privado/${usuario.id}/${pesquisa}`);
  // }
}
