package time2play.interfaces;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import time2play.entities.Agendamento;
import time2play.entities.Quadra;

import java.util.List;

@Repository
public interface AgendamentoRepository extends CrudRepository<Agendamento, Long> {
        Agendamento findByid(long id);

        List<Agendamento> findAllByQuadraIdIs(long id_quadra);
}
