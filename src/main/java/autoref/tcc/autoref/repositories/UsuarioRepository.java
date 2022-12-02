package autoref.tcc.autoref.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import autoref.tcc.autoref.model.*;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{

    @Query(value = "SELECT * FROM referencia WHERE fk_usuario = ?1;", nativeQuery = true)
    List<Referencia> findByIdUsuario(Integer idUsuario);
}
