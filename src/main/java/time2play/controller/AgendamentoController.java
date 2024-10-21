package time2play.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import time2play.entities.Agendamento;
import time2play.entities.Quadra;
import time2play.interfaces.AgendamentoRepository;
import time2play.interfaces.QuadraRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

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
    Agendamento createAgendamento(@RequestBody AgendamentoRequest request) {
        Quadra quadra = quadraRepository.findByid(request.getQuadraId());
        if (quadra == null) {
            throw new IllegalArgumentException("Quadra não encontrada com o ID: " + request.getQuadraId());
        }
        Agendamento newAgendamento = new Agendamento(request.getInicio(), request.getFim(), quadra);
        repository.save(newAgendamento);
        return newAgendamento;
    }

    @DeleteMapping("/agendamentos/delete/{id}")
    public ResponseEntity<String> deleteAgendamento(@PathVariable Long id) {
        Optional<Agendamento> agendamentoOpt = repository.findById(id);

        if (agendamentoOpt.isPresent()) {
            repository.deleteById(id);
            return ResponseEntity.ok("Agendamento deletado com sucesso.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Agendamento não encontrado.");
        }
    }
}

class AgendamentoRequest {
    private LocalDateTime inicio;
    private LocalDateTime fim;
    private long quadraId;

    public LocalDateTime getInicio() {
        return inicio;
    }

    public void setInicio(LocalDateTime inicio) {
        this.inicio = inicio;
    }

    public LocalDateTime getFim() {
        return fim;
    }

    public void setFim(LocalDateTime fim) {
        this.fim = fim;
    }

    public long getQuadraId() {
        return quadraId;
    }

    public void setQuadraId(long quadraId) {
        this.quadraId = quadraId;
    }
}
