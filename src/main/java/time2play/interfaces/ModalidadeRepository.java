package time2play.interfaces;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import time2play.entities.Modalidade;

@Repository
public interface ModalidadeRepository extends CrudRepository<Modalidade, Long> {
}
