package time2play.controller;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import time2play.entities.Agendamento;
import time2play.entities.Quadra;
import time2play.interfaces.AgendamentoRepository;
import time2play.interfaces.QuadraRepository;

import java.time.LocalDateTime;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@Service
@RestController
public class AgendamentoController {
    private final AgendamentoRepository repository;
    private final QuadraRepository quadraRepository;

    public AgendamentoController(AgendamentoRepository repository, QuadraRepository quadraRepository){

        this.repository = repository;
        this.quadraRepository = quadraRepository;
    }

    @GetMapping("/agendamentos")
    List<Agendamento> findAll() {
        return (List<Agendamento>) repository.findAll();
    }

    @GetMapping(path = {"/agendamentos/{id_quadra}"})
    List<Agendamento> findByQuadra(@PathVariable long id_quadra) {
        return (List<Agendamento>) repository.findAllByQuadraIdIs(id_quadra);
    }

    @PostMapping("/agendamentos/create")
    Agendamento createNew(@RequestBody Agendamento agendamento) {
        Agendamento newAgendamento = new Agendamento(agendamento.getInicio(), agendamento.getFim(), agendamento.getQuadra());
        repository.save(newAgendamento);
        return newAgendamento;
    }
}
