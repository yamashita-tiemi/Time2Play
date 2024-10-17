package time2play.entities;

import jakarta.persistence.*;
import time2play.StatusQuadra;

import java.time.LocalDateTime;
import java.util.List;

import static time2play.StatusQuadra.INDISPONIVEL;

@Entity
public class Quadra {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private Float valor_aluguel;
    private String foto_path;
    @Enumerated(EnumType.STRING)
    private StatusQuadra status;

    @ManyToOne
    @JoinColumn(name = "organizacao_id")
    private Organizacao organizacao;

    @ManyToMany
    @JoinTable(
            name = "quadra_modalidade",
            joinColumns = @JoinColumn(name = "quadra_id"),
            inverseJoinColumns = @JoinColumn(name = "modalidade_id")
    )
    private List<Modalidade> modalidades;

    public Quadra() {}

    public Quadra(String nome, Float valorAluguel, Organizacao organizacao) {
        setNome(nome);
        setValor(valorAluguel);
        setOrganizacao(organizacao);
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Float getValor() {
        return valor_aluguel;
    }

    public void setValor(Float valor) {
        this.valor_aluguel = valor_aluguel;
    }

    public Organizacao getOrganizacao() {
        return organizacao;
    }

    public void setOrganizacao(Organizacao organizacao) {
        this.organizacao = organizacao;
    }

    public List<Modalidade> getModalidades() {
        return modalidades;
    }

    public void setModalidades(List<Modalidade> modalidades) {
        this.modalidades = modalidades;
    }

    public StatusQuadra getStatus() {
        return status;
    }

    public void setStatus(StatusQuadra status) {
        this.status = status;
    }

    public boolean verificarDisponibilidade(LocalDateTime inicio, LocalDateTime fim) {
        if (this.status == INDISPONIVEL) {
            return false;
        }
//        for (Agendamento agendamento : this.agendamentos) {
//            // Verifica se sobrepõem
//            if (!(fim.isBefore(agendamento.getInicio()) || inicio.isAfter(agendamento.getFim()))) {
//                return false;
//            }
//        }
        return true;
    }
}

