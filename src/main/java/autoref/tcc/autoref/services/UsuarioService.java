package autoref.tcc.autoref.services;

import java.util.List;
import java.util.Optional;

import autoref.tcc.autoref.model.*;

public interface UsuarioService {

    Usuario autenticaUsuario(String email, String senha);

    Usuario cadastraUsuario(Usuario usuario);

    void validaEmail(String email);

    void excluiUsuario(Integer idUsuario);

    void atualizaUsuario(Usuario usuario);

    List<Usuario> rankingUsuarios();

    Optional<Usuario> buscaPorEmail(String email);

    Optional<Usuario> buscaPorId(Integer idUsuario);

    List<Referencia> buscarPorFkUsuario(Integer idUsuario);

}
