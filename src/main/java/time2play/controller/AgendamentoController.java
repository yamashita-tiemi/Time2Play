package time2play.controller;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import time2play.entities.Agendamento;
import time2play.interfaces.AgendamentoRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@Service
@RestController
public class AgendamentoController {
    private final AgendamentoRepository repository;

    public AgendamentoController(AgendamentoRepository repository){
        this.repository = repository;
    }

    @GetMapping("/agendamentos")
    List<Agendamento> findAll() {
        return (List<Agendamento>) repository.findAll();
    }

    @GetMapping(path = {"/agendamentos/{id_quadra}"})
    List<Agendamento> findByQuadra(@PathVariable long id_quadra) {
        return (List<Agendamento>) repository.findAllByQuadraIdIs(id_quadra);
    }
}
