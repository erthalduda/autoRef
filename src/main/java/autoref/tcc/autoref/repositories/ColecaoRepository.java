package autoref.tcc.autoref.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import autoref.tcc.autoref.model.*;

public interface ColecaoRepository extends JpaRepository<Colecao, Integer> {

    List<Colecao> findByUsuarioIdUsuario(Integer idUsuario);

    Colecao save(Optional<Colecao> c);
}
