package autoref.tcc.autoref.services;

import java.util.List;

import autoref.tcc.autoref.model.*;

public interface ReferenciaService {

    Referencia cadastraReferencia(Referencia referencia);

    Referencia atualizaReferencia(Referencia referencia);

    void deletaReferencia(Referencia referencia);

    Referencia encontrarPorId(Integer id);

    List<Referencia> buscarNoRepositorioGeral(String pesquisa);

    List<Referencia> buscarNoRepositorioPrivado(String pesquisa);
}
