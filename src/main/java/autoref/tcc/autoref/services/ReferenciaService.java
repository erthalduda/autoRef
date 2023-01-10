package autoref.tcc.autoref.services;

import autoref.tcc.autoref.model.Referencia;

public interface ReferenciaService {

    Referencia cadastraReferencia(Referencia referencia);

    Referencia atualizaReferencia(Referencia referencia);

    void deletaReferencia(Referencia referencia);

    Referencia encontrarPorId(Integer id);

}
