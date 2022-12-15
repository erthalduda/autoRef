package autoref.tcc.autoref.services;

import autoref.tcc.autoref.model.Usuario;

public interface UsuarioService {

    Usuario autenticaUsuario(String email, String senha);

    Usuario cadastraUsuario(Usuario usuario);

    void validaEmail(String email);

}
