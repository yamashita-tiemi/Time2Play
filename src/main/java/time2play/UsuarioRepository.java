package time2play;

import time2play.entities.Usuario;

import org.springframework.data.repository.CrudRepository;

public interface UsuarioRepository extends CrudRepository<Usuario, Long>{
    Usuario findByid(long id);
}


//public interface CustomerRepository extends CrudRepository<Customer, Long> {
//
//    List<Customer> findByLastName(String lastName);
//
//    Customer findById(long id);
//}
