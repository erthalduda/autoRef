package autoref.tcc.autoref.services.implementation;

import java.util.Objects;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import autoref.tcc.autoref.model.Referencia;
import autoref.tcc.autoref.repositories.ReferenciaRepository;
import autoref.tcc.autoref.services.ReferenciaService;

@Service
public class ReferenciaServiceImplementation implements ReferenciaService {

    private ReferenciaRepository repositorioReferencia;

    public ReferenciaServiceImplementation(ReferenciaRepository repositorioReferencia) {
        this.repositorioReferencia = repositorioReferencia;
    }

    @Override
    @Transactional
    public Referencia cadastraReferencia(Referencia referencia) {
        return repositorioReferencia.save(referencia);
    }

    @Override
    @Transactional
    public Referencia atualizaReferencia(Referencia referencia) {
        Objects.requireNonNull(referencia.getId());
        return repositorioReferencia.save(referencia);
    }

    @Override
    @Transactional
    public void deletaReferencia(Referencia referencia) {
        Objects.requireNonNull(referencia.getId());
        repositorioReferencia.delete(referencia);
    }

    // ver o que implementar nessa busca
    // @Override
    // @Transactional
    // public List<Referencia> buscarReferencia(Referencia referencia) {
    // String query = "SELECT * FROM referencia WHERE 1 = 1";

    // return null;
    // }

}
