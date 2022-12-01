package autoref.tcc.autoref.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

@Entity
public class Referencia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	protected Integer id;
    protected String titulo;

    @ManyToMany(cascade = CascadeType.PERSIST, fetch = FetchType.EAGER, mappedBy = "referencias")
    protected List<Colecao> colecoes;

    @ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "fk_usuario")
    private Usuario usuario;


    public Referencia() {
    }

    public Referencia(Integer id, String titulo, Usuario usuario) {
        this.id = id;
        this.titulo = titulo;
        this.usuario = usuario;
    }

    public void adicionaColecao(Colecao colecao){
        colecoes.add(colecao);
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitulo() {
        return this.titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public Usuario getUsuario() {
        return this.usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}
