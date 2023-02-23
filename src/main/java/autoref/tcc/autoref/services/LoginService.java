package autoref.tcc.autoref.services;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import autoref.tcc.autoref.api.dtos.UsuarioDTO;
import autoref.tcc.autoref.api.security.config.UsuarioSecurity;
import autoref.tcc.autoref.model.Usuario;
import autoref.tcc.autoref.repositories.UsuarioRepository;

@Service
public class LoginService {

    private UsuarioRepository repositorioUsuario;

    public LoginService(UsuarioRepository repositorioUsuario) {
        this.repositorioUsuario = repositorioUsuario;
    }

    public UsuarioDTO usuarioLogin() {
        return new UsuarioDTO(getLoggedUsuario());
    }

    public Integer getLoggedUserId() {
        var authentication = SecurityContextHolder.getContext().getAuthentication();
        var security = (UsuarioSecurity) authentication.getPrincipal();
        return security.getId();
    }

    public Usuario getLoggedUsuario() {
        return repositorioUsuario.findById(getLoggedUserId()).orElse(null);
    }
}