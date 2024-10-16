package time2play;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import time2play.entities.Usuario;

@RestController
public class Time2playController {

   private UsuarioRepository repository;
    Time2playController(UsuarioRepository user){
       this.repository = user;
   }
    @RequestMapping
    public String helloWorld() {
        Usuario usuario = repository.findByid(1L);
        System.out.println(usuario.getNome());
        return
//                "Hello World!";
        usuario.getNome();
    }

    @RequestMapping("/goodbye")
    public String goodBye() {
        return "GoodBye World!";
    }
}
