package time2play.interfaces;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import time2play.entities.Quadra;

@Repository
public interface QuadraRepository extends CrudRepository<Quadra, Long> {
    Quadra findByid(long id);

    Quadra findQuadrasByOrganizacao_IdIs(long id_organizacao);
}
