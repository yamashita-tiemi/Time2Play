package time2play.interfaces;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import time2play.entities.Quadra;

import java.util.List;

@Repository
public interface QuadraRepository extends CrudRepository<Quadra, Long> {
    Quadra findByid(long id);

    List<Quadra> findAllByOrganizacaoIdIs(long id_organizacao);
}
