package autoref.tcc.autoref.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import autoref.tcc.autoref.model.*;

public interface ColecaoRepository extends JpaRepository<Colecao, Integer> {

    @Query(value = "SELECT * FROM colecao WHERE fk_usuario = ?1", nativeQuery = true)
    List<Colecao> findByUsuario(Integer idUsuario);

    Colecao save(Optional<Colecao> c);

    @Query(value = "SELECT * FROM colecao WHERE nome = ?1 AND fk_usuario = ?2", nativeQuery = true)
    Optional<Colecao> verificaSeÉRepetida(String nomeColecao, Integer idUsuario);

}
