package autoref.tcc.autoref.services.implementation;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import autoref.tcc.autoref.exceptions.ExcecoesAutoref;
import autoref.tcc.autoref.model.Usuario;
import autoref.tcc.autoref.repositories.UsuarioRepository;
import autoref.tcc.autoref.services.UsuarioService;

@Service
public class UsuarioServiceImplementation implements UsuarioService{

    private UsuarioRepository repository;

    @Autowired
    public UsuarioServiceImplementation(UsuarioRepository repository) {
        this.repository = repository;
    }

    @Override
    public Usuario autenticaUsuario(String email, String senha) {
        Optional<Usuario> usuario = repository.findByEmail(email);
        if(!usuario.isPresent()){
            throw new ExcecoesAutoref("E-mail inválido."); 
        }
        if(!usuario.get().getSenha().equals(senha)){
            throw new ExcecoesAutoref("Senha incorreta."); 
        }

        return usuario.get();
    }

    @Override
    public Usuario cadastraUsuario(Usuario usuario) {
        // TODO Auto-generated method stub
        return null;
    }

    //confere se o  email é novo na base de dados -> evita mais de uma conta com o mesmo email
    @Override
    public void validaEmail(String email) {
        boolean exists = repository.existsByEmail(email);
        if(exists){
            throw new ExcecoesAutoref("E-mail já cadastrado.");
        }

        }
    }
