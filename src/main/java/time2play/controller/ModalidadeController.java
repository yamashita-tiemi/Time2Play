package time2play.controller;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import time2play.entities.Modalidade;
import time2play.interfaces.ModalidadeRepository;

import java.util.List;

@Service
@RestController
public class ModalidadeController {
    private final ModalidadeRepository repository;

    public ModalidadeController(ModalidadeRepository repository){
        this.repository = repository;
    }

    @GetMapping("/modalidades")
    List<Modalidade> findAll() {
        return (List<Modalidade>) repository.findAll();
    }
}
