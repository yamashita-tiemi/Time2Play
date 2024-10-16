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
    private String localizacao;
    private Boolean disponivel;
    private Float valorAluguel;
    @Enumerated(EnumType.STRING)
    private StatusQuadra status;

    @ManyToOne
    @JoinColumn(name = "organizacao_id")
    private Organizacao organizacao;

    @OneToMany(mappedBy = "quadra")
    private List<Agendamento> agendamentos;

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

    public String getLocalizacao() {
        return localizacao;
    }

    public void setLocalizacao(String localizacao) {
        this.localizacao = localizacao;
    }

    public Boolean getDisponivel() {
        return disponivel;
    }

    public void setDisponivel(Boolean disponivel) {
        this.disponivel = disponivel;
    }

    public Float getValor() {
        return valorAluguel;
    }

    public void setValor(Float valor) {
        this.valorAluguel = valorAluguel;
    }

    public Organizacao getOrganizacao() {
        return organizacao;
    }

    public void setOrganizacao(Organizacao organizacao) {
        this.organizacao = organizacao;
    }

    public List<Agendamento> getAgendamentos() {
        return agendamentos;
    }

    public void setAgendamentos(List<Agendamento> agendamentos) {
        this.agendamentos = agendamentos;
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
        for (Agendamento agendamento : this.agendamentos) {
            // Verifica se sobrepõem
            if (!(fim.isBefore(agendamento.getInicio()) || inicio.isAfter(agendamento.getFim()))) {
                return false;
            }
        }
        return true;
    }
}
