package autoref.tcc.autoref.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import autoref.tcc.autoref.model.*;

public interface ReferenciaRepository extends JpaRepository<Referencia, Integer> {

    List<Referencia> findByUsuario(Usuario usuario);

    @Query(value = "SELECT * FROM referencia WHERE CONTAINS(formato_final, ?1)", nativeQuery = true)
    List<Referencia> buscaReferencia(String pesquisa);
}
