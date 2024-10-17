package time2play.controller;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import time2play.entities.Organizacao;
import time2play.interfaces.OrganizacaoRepository;

import java.util.List;

@Service
@RestController
public class OrganizacaoController {
    private final OrganizacaoRepository repository;

    public OrganizacaoController(OrganizacaoRepository repository){
        this.repository = repository;
    }

    @GetMapping("/organizacoes")
    List<Organizacao> findAll() {
        return (List<Organizacao>) repository.findAll();
    }
}
