package time2play.interfaces;

import org.springframework.stereotype.Repository;
import time2play.entities.Usuario;

import org.springframework.data.repository.CrudRepository;

@Repository
public interface UsuarioRepository extends CrudRepository<Usuario, Long>{
    Usuario findByid(long id);
}