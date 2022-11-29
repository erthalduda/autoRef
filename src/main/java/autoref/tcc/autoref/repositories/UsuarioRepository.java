package autoref.tcc.autoref.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import autoref.tcc.autoref.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{
    
}
