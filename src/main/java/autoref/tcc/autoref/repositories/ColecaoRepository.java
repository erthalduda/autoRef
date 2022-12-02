package autoref.tcc.autoref.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import autoref.tcc.autoref.model.*;

public interface ColecaoRepository extends JpaRepository<Colecao, Integer>{
    
    List<Colecao> findByUsuario(Usuario usuario);
}
