package time2play.controller;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import time2play.entities.Quadra;
import time2play.interfaces.QuadraRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@Service
@RestController
public class QuadraController {
    private final QuadraRepository repository;

    public QuadraController(QuadraRepository repository){
        this.repository = repository;
    }

    @GetMapping("/quadras")
    List<Quadra> findAll() {
        return (List<Quadra>) repository.findAll();
    }
    
    @GetMapping(path = {"/quadras/{id_org}"})
    List<Quadra> findByOrg(@PathVariable long id_org) {
        return (List<Quadra>) repository.findQuadrasByOrganizacao_IdIs(id_org);
    }

    @GetMapping(path = {"/quadra/{id}"})
    Quadra findById(@PathVariable long id) {
        return repository.findByid(id);
    }

    @RequestMapping("/quadra")
    public Quadra teste() {
        return repository.findByid(1L);
    }

}
