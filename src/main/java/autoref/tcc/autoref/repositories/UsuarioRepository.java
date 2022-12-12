package autoref.tcc.autoref.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import autoref.tcc.autoref.model.*;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{

    boolean existsByEmail(String email);
    
    Optional<Usuario> findByEmail(String email);
}
