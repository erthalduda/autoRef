package autoref.tcc.autoref.services.implementation;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import autoref.tcc.autoref.exceptions.ExcecoesAutoref;
import autoref.tcc.autoref.model.*;
import autoref.tcc.autoref.repositories.*;
import autoref.tcc.autoref.services.ColecaoService;
import autoref.tcc.autoref.services.LoginService;

@Service
public class ColecaoServiceImplementation implements ColecaoService {

    private ColecaoRepository repositorioColecao;
    private UsuarioRepository repositorioUsuario;

    @Autowired
    private LoginService loginService;

    public ColecaoServiceImplementation(ColecaoRepository repositorioColecao, UsuarioRepository repositorioUsuario) {
        this.repositorioColecao = repositorioColecao;
        this.repositorioUsuario = repositorioUsuario;
    }

    @Override
    @Transactional
    public Colecao cadastraColecao(Colecao colecaoCadastro) {
        Usuario usuario = loginService.getLoggedUsuario();
        colecaoCadastro.setUsuario(usuario);
        verificaSeERepetida(colecaoCadastro);

        int colecoesUsuario = repositorioUsuario.colecoesPorUsuario(usuario.getIdUsuario());

        if (colecoesUsuario >= 1) {
            usuario.setPossuiPesquisadorIniciante(true);
        }

        if (colecoesUsuario >= 10) {
            usuario.setPossuiPesquisadorAtarefado(true);
        }

        if (colecoesUsuario >= 20) {
            usuario.setPossuiPesquisadorExpert(true);
        }

        if (colecoesUsuario >= 25) {
            usuario.setPossuiPesquisadorSabio(true);
        }

        usuario.setXp(100);
        return repositorioColecao.save(colecaoCadastro);
    }

    @Override
    @Transactional
    public void deletaColecao(Integer id) {
        Objects.requireNonNull(id);
        repositorioColecao.deleteById(id);
    }

    @Override
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

        Usuario usuario = loginService.getLoggedUsuario();
        if (colecao.getReferencias().size() == 10) {
            usuario.setXp(500);
        }
        if (colecao.getReferencias().size() == 20) {
            usuario.setXp(1500);
        }

        usuario.setXp(50);

        if (referencia.getUsuario().getIdUsuario() != usuario.getIdUsuario()) {
            Optional<Usuario> u = repositorioUsuario.findById(referencia.getUsuario().getIdUsuario());
            u.get().setXp(200);
            u.get().setPossuiAcademicoAdmirado(true);
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
    public List<Colecao> colecoesPorUsuario() {
        Usuario usuario = loginService.getLoggedUsuario();
        return repositorioColecao.findByUsuario(usuario.getIdUsuario());
    }

    @Override
    public Colecao buscaPorId(Integer idColecao) {
        Optional<Colecao> colecaoPorId = repositorioColecao.findById(idColecao);
        if (!colecaoPorId.isPresent()) {
            throw new ExcecoesAutoref("Coleção não encontrada.");
        }
        return colecaoPorId.get();
    }

    @Override
    @Transactional
    public void verificaSeERepetida(Colecao colecao) {
        Integer existeColecaoComEsseNome = repositorioColecao.verificaSeERepetida(colecao.getNome(),
                colecao.getUsuario().getIdUsuario());

        if (existeColecaoComEsseNome > 0) {
            throw new ExcecoesAutoref("Você já possui uma coleção com este nome.");
        }
    }
}
