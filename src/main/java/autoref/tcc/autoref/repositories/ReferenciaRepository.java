package autoref.tcc.autoref.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import autoref.tcc.autoref.model.Referencia;
import autoref.tcc.autoref.model.*;

public interface ReferenciaRepository extends JpaRepository<Referencia, Integer> {
    
    List<Referencia> findByUsuario(Usuario usuario);
}
