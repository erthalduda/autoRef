package autoref.tcc.autoref.services.implementation;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import autoref.tcc.autoref.exceptions.ExcecoesAutoref;
import autoref.tcc.autoref.model.*;
import autoref.tcc.autoref.repositories.*;
import autoref.tcc.autoref.services.ReferenciaService;

@Service
public class ReferenciaServiceImplementation implements ReferenciaService {

    private ReferenciaRepository repositorioReferencia;
    private UsuarioRepository repositorioUsuario;

    public ReferenciaServiceImplementation(ReferenciaRepository repositorioReferencia, UsuarioRepository repositorioUsuario) {
        this.repositorioReferencia = repositorioReferencia;
        this.repositorioUsuario = repositorioUsuario;
    }

    @Override
    @Transactional
    public Referencia cadastraReferencia(Referencia referencia) {

        Optional<Usuario> usuario = repositorioUsuario.findById(referencia.getUsuario().getIdUsuario());
        int quantidadeReferencias = repositorioUsuario.referenciasPorUsuario(usuario.get().getIdUsuario());

        if(quantidadeReferencias == 10){
            usuario.get().setXp(500);
        }

        if (quantidadeReferencias >= 20) {
            usuario.get().setXp(1500);
            usuario.get().setPossuiAcademicoNovato(true);
        }

        if (quantidadeReferencias >= 50) {
            usuario.get().setPossuiAcademicoEsforcado(true);
        }

        if (quantidadeReferencias >= 100) {
            usuario.get().setPossuiAcademicoMestre(true);
        }

        usuario.get().setXp(100);
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
    public void deletaReferencia(Integer id) {
        Objects.requireNonNull(id);
        repositorioReferencia.deleteById(id);
    }

    // provavelmente não usaremos essa
    @Override
    public Referencia encontrarPorId(Integer id) {
        Optional<Referencia> referenciaPorId = repositorioReferencia.findById(id);
        if (!referenciaPorId.isPresent()) {
            throw new ExcecoesAutoref("Referência não encontrada.");
        }
        return referenciaPorId.get();
    }

    @Override
    @Transactional
    public List<String> buscarNoRepositorioGeral(String pesquisa) {
        List<String> retornoBusca = repositorioReferencia.buscaReferenciaRepositorioGeral(pesquisa);
        // usuario.setXp(100);
        // ver como implementar a adição de XP pro dono da referência utilizada
        return retornoBusca;
    }

    @Override
    @Transactional
    public List<String> buscarEspecificaNoRepositorioPrivado(String pesquisa, Integer idUsuario) {
        List<String> retornoBusca = repositorioReferencia.buscaReferenciaEspecificaPrivado(pesquisa, idUsuario);
        return retornoBusca;
    }

    @Override
    @Transactional
    public List<String> buscarTodasNoRepositorioPrivado(Integer idUsuario) {
        List<String> retornoBusca = repositorioReferencia.buscaTodasReferenciasPrivado(idUsuario);
        return retornoBusca;
    }

}
