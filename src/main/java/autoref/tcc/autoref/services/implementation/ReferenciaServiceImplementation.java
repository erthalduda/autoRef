package autoref.tcc.autoref.services.implementation;

import java.lang.StackWalker.Option;
import java.util.Objects;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import autoref.tcc.autoref.exceptions.ExcecoesAutoref;
import autoref.tcc.autoref.model.Referencia;
import autoref.tcc.autoref.repositories.ReferenciaRepository;
import autoref.tcc.autoref.services.ReferenciaService;

@Service
public class ReferenciaServiceImplementation implements ReferenciaService {

    private ReferenciaRepository repository;

    public ReferenciaServiceImplementation(ReferenciaRepository repository) {
        this.repository = repository;
    }

    @Override
    @Transactional
    public Referencia cadastraReferencia(Referencia referencia) {
        return repository.save(referencia);
    }

    @Override
    @Transactional
    public Referencia atualizaReferencia(Referencia referencia) {
        Objects.requireNonNull(referencia.getId());
        return repository.save(referencia);
    }

    @Override
    @Transactional
    public void deletaReferencia(Referencia referencia) {
        Objects.requireNonNull(referencia.getId());
        repository.delete(referencia);
    }

    @Override
    public Referencia encontrarPorId(Integer id) {
        Optional<Referencia> referenciaPorId = repository.findById(id);
        if(!referenciaPorId.isPresent()){
            throw new ExcecoesAutoref("Referência não encontrada.");
        }
        return referenciaPorId.get();
    }

}
