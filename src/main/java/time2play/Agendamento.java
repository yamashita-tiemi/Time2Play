package time2play;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.time.Duration;

@Entity
public class Agendamento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime inicio;
    private LocalDateTime fim;

    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

    @ManyToOne
    @JoinColumn(name = "quadra_id")
    private Quadra quadra;

    public Long getId() {
        return id;
    }


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

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public Quadra getQuadra() {
        return quadra;
    }

    public void setQuadra(Quadra quadra) {
        this.quadra = quadra;
    }

    public Float getValorTotal() {
        return this.quadra.getValor() * getNumeroHoras();
    }

    public long getNumeroHoras() {
        Duration duracao = Duration.between(this.inicio, this.fim);
        return duracao.toHours();
    }
}

