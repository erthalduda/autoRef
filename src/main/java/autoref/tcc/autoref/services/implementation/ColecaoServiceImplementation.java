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

    public ColecaoServiceImplementation(ColecaoRepository repositorioColecao, UsuarioRepository repositorioUsuario) {
        this.repositorioColecao = repositorioColecao;
        this.repositorioUsuario = repositorioUsuario;
    }

    @Override
    @Transactional
    public Colecao cadastraColecao(Colecao colecaoCadastro) {
        verificaSeERepetida(colecaoCadastro);

        Optional<Usuario> usuario = repositorioUsuario.findById(colecaoCadastro.getUsuario().getIdUsuario());
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
        return repositorioColecao.save(colecaoCadastro);
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
        verificaSeERepetida(colecao);
        repositorioColecao.save(colecao);
    }

    @Override
    @Transactional
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
        return repositorioColecao.save(colecaoParaAdicionarReferencias.get());
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

    @Override
    public Optional<Colecao> buscaPorId(Integer idColecao) {
        return repositorioColecao.findById(idColecao);
    }

    @Override
    @Transactional
    public void verificaSeERepetida(Colecao colecao) {
        System.out.println(colecao.getNome() + " " + colecao.getUsuario().getIdUsuario());
        Integer existeColecaoComEsseNome = repositorioColecao.verificaSeERepetida(colecao.getNome(),
                colecao.getUsuario().getIdUsuario());

        Optional<Colecao> col = repositorioColecao.findByNomeAndUsuario_IdUsuario(colecao.getNome(),
                colecao.getUsuario().getIdUsuario());

        if (existeColecaoComEsseNome > 0) {
            throw new ExcecoesAutoref("Você já possui uma coleção com este nome.");
        }
    }
}
