package time2play;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;

import java.time.LocalDateTime;
import java.util.List;

@Entity
public class Cliente extends Usuario {

    @OneToMany(mappedBy = "cliente")
    private List<Agendamento> agendamentos;

    public List<Agendamento> getAgendamentos() {
        return agendamentos;
    }

    public void setAgendamentos(List<Agendamento> agendamentos) {
        this.agendamentos = agendamentos;
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

