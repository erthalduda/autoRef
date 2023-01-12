package autoref.tcc.autoref.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import autoref.tcc.autoref.model.*;

public interface ColecaoRepository extends JpaRepository<Colecao, Integer> {

    @Query("SELECT * FROM colecao WHERE fk_usuario = ?1;")
    List<Colecao> findByUsuario(Integer idUsuario);

    Colecao save(Optional<Colecao> c);
}
