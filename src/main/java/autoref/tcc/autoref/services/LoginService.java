package autoref.tcc.autoref.services;

import autoref.tcc.autoref.api.dtos.UsuarioDTO;
import autoref.tcc.autoref.model.Usuario;

public interface LoginService {

    public UsuarioDTO usuarioLogin();

    public Integer getLoggedUserId();

    public Usuario getLoggedUsuario();
}