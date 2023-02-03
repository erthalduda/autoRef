package autoref.tcc.autoref.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import autoref.tcc.autoref.model.*;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    boolean existsByEmail(String email);

    Optional<Usuario> findByEmail(String email);

    @Query(value = "SELECT COUNT(fk_usuario) FROM referencia WHERE fk_usuario = ?1", nativeQuery = true)
    int referenciasPorUsuario(Integer idUsuario);

    // talvez seja útil no futuro, talvez não
    // @Query(value = "SELECT COUNT(fk_usuario) FROM colecao WHERE fk_usuario = ?1",
    // nativeQuery = true)
    // int colecoesPorUsuario(Integer idUsuario);

    @Query(value = "SELECT * FROM usuario ORDER BY xp DESC", nativeQuery = true)
    List<Usuario> rankingUsuarios();
}
