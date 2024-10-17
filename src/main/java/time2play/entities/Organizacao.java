package time2play.entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Organizacao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String endereco;
    private String logo_path;

    @OneToOne(mappedBy = "organizacao")
    private Funcionario funcionario;

    public Organizacao() {}

    public Organizacao(String nome, String endereco, Funcionario funcionario) {
        setNome(nome);
        setEndereco(endereco);
        setFuncionario(funcionario);
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

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getLogo_path() {
        return logo_path;
    }

    public void setLogo_path(String logo_path) {
        this.logo_path = logo_path;
    }

    public Funcionario getFuncionario() {
        return funcionario;
    }

    public void setFuncionario(Funcionario funcionario) {
        this.funcionario = funcionario;
    }
}

