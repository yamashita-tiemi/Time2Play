package time2play;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Modalidade {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @ManyToMany(mappedBy = "modalidades")
    private List<Quadra> quadras;

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public List<Quadra> getQuadras() {
        return quadras;
    }

    public void setQuadras(List<Quadra> quadras) {
        this.quadras = quadras;
    }
}

