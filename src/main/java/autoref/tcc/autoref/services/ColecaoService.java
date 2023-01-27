package autoref.tcc.autoref.services;

import java.util.List;

import autoref.tcc.autoref.model.*;

public interface ColecaoService {

    Colecao cadastraColecao(Colecao colecao);

    void atualizaColecao(Colecao colecao);

    void deletaColecao(Colecao colecao);
    
    Colecao adicionaReferencia(Colecao colecao, Referencia referencia);

    void deletaReferencia(Colecao colecao, Referencia referencia);

    List<Colecao> colecoesPorUsuario(Integer idUsuario);
}
