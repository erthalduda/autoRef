package autoref.tcc.autoref.services;

import java.util.List;

import autoref.tcc.autoref.model.Usuario;

public interface UsuarioService {

    Usuario autenticaUsuario(String email, String senha);

    Usuario cadastraUsuario(Usuario usuario);

    void validaEmail(String email);

    void excluiUsuario(Integer idUsuario);

    void atualizaUsuario(Usuario usuario);

    List<Usuario> rankingUsuarios();

}
