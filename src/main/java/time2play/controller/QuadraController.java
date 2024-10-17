package time2play.controller;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import time2play.entities.Quadra;
import time2play.interfaces.QuadraRepository;

import java.util.List;

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

}
