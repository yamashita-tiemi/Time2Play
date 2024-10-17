package time2play.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;

import java.time.LocalDateTime;
import java.util.List;

@Entity
public class Cliente extends Usuario {

    public Cliente() {}

    public Cliente(String nome, String email, String senha, String telefone) {
        super(nome, email, senha, telefone);
    }

    public void realizaAgendamento(Quadra quadra, LocalDateTime inicio, LocalDateTime fim) {
        if (quadra.verificarDisponibilidade(inicio, fim)) {
            Agendamento agendamento = new Agendamento(inicio, fim, this, quadra);
            //add na lista de agendamentos
        }
        else {
            System.out.println("Não foi possivel realizar o agendamento.");
            //devolver o erro (?)
        }
    }
}

