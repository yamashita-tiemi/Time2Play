package time2play.interfaces;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import time2play.entities.Organizacao;

@Repository
public interface OrganizacaoRepository extends CrudRepository<Organizacao, Long> {
    Organizacao findByid(long id);
}