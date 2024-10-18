package time2play.controller;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import time2play.entities.Usuario;
import time2play.interfaces.UsuarioRepository;


import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@Service
@RestController
public class UsuarioController {
    private final UsuarioRepository repository;

    public UsuarioController(UsuarioRepository repository){
        this.repository = repository;
    }

    @GetMapping("/usuarios")
    List<Usuario> findAll() {
        return (List<Usuario>) repository.findAll();
    }
}
