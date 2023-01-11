package autoref.tcc.autoref.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import autoref.tcc.autoref.model.*;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    boolean existsByEmail(String email);

    Optional<Usuario> findByEmail(String email);

    @Query("SELECT COUNT(fk_usuario) FROM referencia WHERE fk_usuario = ?1;")
    int referenciasPorUsuario(Integer idUsuario);

    // talvez seja útil no futuro, talvez não
    // @Query("SELECT COUNT(fk_usuario) FROM colecao WHERE fk_usuario = ?1;")
    // int colecoesPorUsuario(Integer idUsuario);
}
