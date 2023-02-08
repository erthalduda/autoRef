package autoref.tcc.autoref.services.implementation;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import autoref.tcc.autoref.exceptions.ExcecoesAutoref;
import autoref.tcc.autoref.model.*;
import autoref.tcc.autoref.repositories.*;
import autoref.tcc.autoref.services.ColecaoService;

@Service
public class ColecaoServiceImplementation implements ColecaoService {

    private ColecaoRepository repositorioColecao;
    private UsuarioRepository repositorioUsuario;

    public ColecaoServiceImplementation(ColecaoRepository repositorioColecao) {
        this.repositorioColecao = repositorioColecao;
    }

    @Override
    @Transactional
    public Colecao cadastraColecao(Colecao colecaoCadastro) {
        Optional<Colecao> colecao = repositorioColecao.findByNome(colecaoCadastro.getNome());
        if (colecao.isPresent()) {
            throw new ExcecoesAutoref("Já existe uma coleção com este nome.");
        }

        Optional<Usuario> usuario = repositorioUsuario.findById(colecao.get().getUsuario().getIdUsuario());
        int colecoesUsuario = repositorioUsuario.colecoesPorUsuario(usuario.get().getIdUsuario());

        if (colecoesUsuario >= 1 && colecoesUsuario < 10) {
            usuario.get().setPossuiPesquisadorIniciante(true);
        }

        if (colecoesUsuario >= 11 && colecoesUsuario < 20) {
            usuario.get().setPossuiPesquisadorAtarefado(true);
        }

        if (colecoesUsuario >= 21 && colecoesUsuario < 25) {
            usuario.get().setPossuiPesquisadorExpert(true);
        }

        if (colecoesUsuario >= 26) {
            usuario.get().setPossuiPesquisadorSabio(true);
        }

        usuario.get().setXp(100);
        return colecao.get();
    }

    @Override
    @Transactional
    public void deletaColecao(Integer id) {
        Objects.requireNonNull(id);
        repositorioColecao.deleteById(id);
    }

    @Override
    @Transactional
    public void atualizaColecao(Colecao colecao) {
        Objects.requireNonNull(colecao.getIdColecao());
        repositorioColecao.save(colecao);
    }

    @Override
    @Transactional
    // talvez não precise passar o usuário como parâmetro, a ser estudado
    public Colecao adicionaReferencia(Colecao colecao, Referencia referencia) {
        Optional<Colecao> colecaoParaAdicionarReferencias = repositorioColecao.findById(colecao.getIdColecao());
        if (colecaoParaAdicionarReferencias.isEmpty()) {
            throw new ExcecoesAutoref("Coleção inválida.");
        }

        Optional<Usuario> usuario = repositorioUsuario
                .findById(colecaoParaAdicionarReferencias.get().getUsuario().getIdUsuario());

        if (colecao.getReferencias().size() == 10) {
            usuario.get().setXp(500);
        }
        if (colecao.getReferencias().size() == 20) {
            usuario.get().setXp(1500);
        }

        usuario.get().setXp(50);

        if (referencia.getUsuario().getIdUsuario() != usuario.get().getIdUsuario()) {
            Optional<Usuario> u = repositorioUsuario.findById(referencia.getUsuario().getIdUsuario());
            u.get().setXp(200);
        }

        colecaoParaAdicionarReferencias.get().adicionaReferencia(referencia);
        return repositorioColecao.save(colecaoParaAdicionarReferencias);
    }

    @Override
    @Transactional
    public void deletaReferencia(Colecao colecao, Referencia referencia) {
        Optional<Colecao> colecaoParaRemoverReferencia = repositorioColecao.findById(colecao.getIdColecao());
        colecaoParaRemoverReferencia.get().getReferencias().remove(referencia);
    }

    @Override
    public List<Colecao> colecoesPorUsuario(Integer idUsuario) {
        return repositorioColecao.findByUsuario(idUsuario);
    }

}
