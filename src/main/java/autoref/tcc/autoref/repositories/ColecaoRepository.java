package autoref.tcc.autoref.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import autoref.tcc.autoref.model.Colecao;

public interface ColecaoRepository extends JpaRepository<Colecao, Integer>{
    
}
