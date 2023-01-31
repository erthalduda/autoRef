package autoref.tcc.autoref.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import autoref.tcc.autoref.model.*;

public interface ReferenciaRepository extends JpaRepository<Referencia, Integer> {

    List<Referencia> findByUsuario(Usuario usuario);

    @Query(value = "SELECT formato_final FROM referencia WHERE todos_os_dados LIKE '%?1%';", nativeQuery = true)
    List<Referencia> buscaReferencia(String pesquisa);
}
