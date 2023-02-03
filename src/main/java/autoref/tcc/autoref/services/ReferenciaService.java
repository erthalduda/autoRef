package autoref.tcc.autoref.services;

import java.util.List;

import autoref.tcc.autoref.model.*;

public interface ReferenciaService {

    Referencia cadastraReferencia(Referencia referencia);

    Referencia atualizaReferencia(Referencia referencia);

    void deletaReferencia(Referencia referencia);

    Referencia encontrarPorId(Integer id);

    List<String> buscarNoRepositorioGeral(String pesquisa);

    List<String> buscarEspecificaNoRepositorioPrivado(String pesquisa, Integer idUsuario);

    List<String> buscarTodasNoRepositorioPrivado(Integer idUsuario);
}
