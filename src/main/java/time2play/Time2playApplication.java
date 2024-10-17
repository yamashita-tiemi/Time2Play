package time2play;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;
import time2play.entities.Usuario;
import time2play.interfaces.UsuarioRepository;

@SpringBootApplication
public class Time2playApplication {

    public static void main(String[] args) {
        SpringApplication.run(Time2playApplication.class, args);
    }

    public CommandLineRunner demo(UsuarioRepository repository) {
        return (args) -> {
            Usuario usuario = repository.findByid(1L);
            System.out.println(usuario.toString());
        };
    }
}
