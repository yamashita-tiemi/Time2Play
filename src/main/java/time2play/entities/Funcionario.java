package time2play.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Entity
public class Funcionario extends Usuario {

    @OneToOne
    @JoinColumn(name = "organizacao_id")
    private Organizacao organizacao;

    public  Funcionario() {}

    public Funcionario(String nome, String email, String senha, String telefone, Organizacao organizacao) {
        super(nome, email, senha, telefone);
        setOrganizacao(organizacao);
    }

    public Organizacao getOrganizacao() {
        return organizacao;
    }

    public void setOrganizacao(Organizacao organizacao) {
        this.organizacao = organizacao;
    }
}

