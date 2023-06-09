package autoref.tcc.autoref.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import autoref.tcc.autoref.model.*;

public interface ReferenciaRepository extends JpaRepository<Referencia, Integer> {

    List<Referencia> findByUsuario(Usuario usuario);

    @Query(value = "SELECT * FROM referencia WHERE todos_os_dados LIKE CONCAT ('%', ?1, '%');", nativeQuery = true)
    List<Referencia> buscaReferenciaRepositorioGeral(String pesquisa);

    @Query(value = "SELECT * FROM referencia WHERE todos_os_dados LIKE CONCAT ('%', ?1, '%') AND fk_usuario=?2", nativeQuery = true)
    List<Referencia> buscaReferenciaEspecificaPrivado(String pesquisa, Integer idUsuario);

    @Query(value = "SELECT * FROM referencia WHERE fk_usuario = ?1", nativeQuery = true)
    List<Referencia> buscaTodasReferenciasPrivado(Integer idUsuario);
}
