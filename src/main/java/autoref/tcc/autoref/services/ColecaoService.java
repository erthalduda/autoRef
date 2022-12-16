package autoref.tcc.autoref.services;

import autoref.tcc.autoref.model.Colecao;
import autoref.tcc.autoref.model.Referencia;

public interface ColecaoService {

    Colecao cadastraColecao(Colecao colecao);

    Colecao atualizaColecao(Colecao colecao);

    void deletaColecao(Colecao colecao);
    
    Referencia adicionaReferencia(Referencia referencia);

    void deletaReferencia(Referencia referencia);
}
