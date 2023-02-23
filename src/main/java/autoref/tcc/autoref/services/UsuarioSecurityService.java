package autoref.tcc.autoref.services;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import autoref.tcc.autoref.api.security.config.UsuarioSecurity;
import autoref.tcc.autoref.model.Usuario;
import autoref.tcc.autoref.repositories.UsuarioRepository;

//Nao sei pra que serve essa classe, nao sei nem se precisa, mas deixa ai pra garantir
@Service
public class UsuarioSecurityService implements UserDetailsService {

    private UsuarioRepository repositorioUsuario;

    public UsuarioSecurityService(UsuarioRepository repositorioUsuario) {
        this.repositorioUsuario = repositorioUsuario;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Usuario usuario = repositorioUsuario.findByEmail(email).orElse(null);
        return new UsuarioSecurity(usuario);
    }
}