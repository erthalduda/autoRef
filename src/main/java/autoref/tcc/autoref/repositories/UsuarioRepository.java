package autoref.tcc.autoref.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import autoref.tcc.autoref.model.*;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{

    boolean existsByEmail(String email);
}
