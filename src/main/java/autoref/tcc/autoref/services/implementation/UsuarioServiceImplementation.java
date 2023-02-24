package autoref.tcc.autoref.services.implementation;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import autoref.tcc.autoref.exceptions.ExcecoesAutoref;
import org.springframework.transaction.annotation.Transactional;
import autoref.tcc.autoref.model.*;
import autoref.tcc.autoref.repositories.UsuarioRepository;
import autoref.tcc.autoref.services.UsuarioService;

@Service
public class UsuarioServiceImplementation implements UsuarioService {

    private UsuarioRepository repositorioUsuario;
    private PasswordEncoder encoder;

    public UsuarioServiceImplementation(UsuarioRepository repositorioUsuario, PasswordEncoder encoder) {
        this.repositorioUsuario = repositorioUsuario;
        this.encoder = encoder;
    }

    @Override
    @Transactional
    public Usuario autenticaUsuario(String email, String senha) {
        Optional<Usuario> usuario = repositorioUsuario.findByEmail(email);
        if (!usuario.isPresent()) {
            throw new ExcecoesAutoref("E-mail inválido.");
        }

        if (!(encoder.matches(senha, usuario.get().getSenha()))) {
            throw new ExcecoesAutoref("Sua senha está incorreta.");
        }

        return usuario.get();
    }

    @Override
    @Transactional
    public void validaEmail(String email) {
        boolean existeUsuarioComEsseEmail = repositorioUsuario.existsByEmail(email);
        if (existeUsuarioComEsseEmail) {
            throw new ExcecoesAutoref("E-mail já cadastrado.");
        }
    }

    @Override
    @Transactional
    public Usuario cadastraUsuario(Usuario usuario) {
        validaEmail(usuario.getEmail());
        usuario.setSenha(encoder.encode(usuario.getSenha()));
        return repositorioUsuario.save(usuario);
    }

    @Override
    @Transactional
    public void atualizaUsuario(Usuario usuario) {
        Objects.requireNonNull(usuario.getIdUsuario());
        repositorioUsuario.save(usuario);
    }

    @Override
    @Transactional
    public void excluiUsuario(Integer id) {
        repositorioUsuario.deleteByIdUsuario(id);
    }

    @Override
    public List<Usuario> rankingUsuarios() {
        return repositorioUsuario.rankingUsuarios();
    }

    @Override
    public Optional<Usuario> buscaPorEmail(String email) {
        return repositorioUsuario.findByEmail(email);
    }

    @Override
    @Transactional
    public Optional<Usuario> buscaPorId(Integer idUsuario) {
        return repositorioUsuario.findById(idUsuario);
    }

    @Override
    @Transactional
    public List<Referencia> buscarPorFkUsuario(Integer idUsuario) {
        List<Referencia> retornoBusca = repositorioUsuario.buscaTodasFkUsuario(idUsuario);
        return retornoBusca;
    }

}
