package autoref.tcc.autoref.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import autoref.tcc.autoref.model.Referencia;

public interface ReferenciaRepository extends JpaRepository<Referencia, Integer> {
    
}
