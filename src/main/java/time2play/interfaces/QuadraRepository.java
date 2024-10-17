package time2play.interfaces;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import time2play.entities.Quadra;

@Repository
public interface QuadraRepository extends CrudRepository<Quadra, Long> {
}
