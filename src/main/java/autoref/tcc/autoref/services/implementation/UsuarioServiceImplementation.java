package autoref.tcc.autoref.services.implementation;

import java.util.Objects;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import autoref.tcc.autoref.exceptions.ExcecoesAutoref;
import autoref.tcc.autoref.model.Usuario;
import autoref.tcc.autoref.repositories.UsuarioRepository;
import autoref.tcc.autoref.services.UsuarioService;

@Service
public class UsuarioServiceImplementation implements UsuarioService {

    private UsuarioRepository repository;

    public UsuarioServiceImplementation(UsuarioRepository repository) {
        this.repository = repository;
    }

    // autentica um usuário na aplicação
    @Override
    public Usuario autenticaUsuario(String email, String senha) {
        // verifica se existe algum usuário cadastrado com o email fornecido
        Optional<Usuario> usuario = repository.findByEmail(email);
        if (!usuario.isPresent()) {
            throw new ExcecoesAutoref("E-mail inválido.");
        }
        // se passar na primeira verificação, verifica se a senha fornecida bate com a
        // senha salva no BD
        if (!usuario.get().getSenha().equals(senha)) {
            throw new ExcecoesAutoref("Sua senha está incorreta.");
        }
        // se passar em todas as verificações, retorna o usuário
        return usuario.get();
    }

    // confere se o email é novo na base de dados -> evita mais de uma conta com o
    // mesmo email
    @Override
    public void validaEmail(String email) {
        boolean existeUsuarioComEsseEmail = repository.existsByEmail(email);
        if (existeUsuarioComEsseEmail) {
            throw new ExcecoesAutoref("E-mail já cadastrado.");
        }
    }

    @Override
    public Usuario cadastraUsuario(Usuario usuario) {
        // valida se o email já está cadastrado ou não
        validaEmail(usuario.getEmail());
        // se for um email novo, cadastra o usuário fornecido
        return repository.save(usuario);
    }

    @Override
    public void atualizaUsuario(Usuario usuario) {
        Objects.requireNonNull(usuario.getIdUsuario());
        repository.save(usuario);
    }

    @Override
    public void excluiUsuario(Integer id) {
        repository.deleteById(id);
    }
}
