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
    protected String formatoFinal;
    protected String citacaoIndireta;
    protected String citacaoDireta;
    protected String tipo;

    @ManyToMany(cascade = CascadeType.PERSIST, fetch = FetchType.EAGER, mappedBy = "referencias")
    protected List<Colecao> colecoes;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_usuario")
    private Usuario usuario;

    public Referencia(Integer id, String titulo, String formatoFinal, String citacaoIndireta, String citacaoDireta,
            String tipo, List<Colecao> colecoes, Usuario usuario) {
        this.id = id;
        this.titulo = titulo;
        this.formatoFinal = formatoFinal;
        this.citacaoIndireta = citacaoIndireta;
        this.citacaoDireta = citacaoDireta;
        this.tipo = tipo;
        this.colecoes = colecoes;
        this.usuario = usuario;
    }

    public Referencia() {
    }

    public void adicionaColecao(Colecao colecao) {
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

    public String getFormatoFinal() {
        return formatoFinal;
    }

    public void setFormatoFinal(String formatoFinal) {
        this.formatoFinal = formatoFinal;
    }

    public String getCitacaoIndireta() {
        return this.citacaoIndireta;
    }

    public void setCitacaoIndireta(String citacaoIndireta) {
        this.citacaoIndireta = citacaoIndireta;
    }

    public String getCitacaoDireta() {
        return this.citacaoDireta;
    }

    public void setCitacaoDireta(String citacaoDireta) {
        this.citacaoDireta = citacaoDireta;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String formataAutores(){
        return null;
    }

    public String formataCitacoes(){
        return null;
    }

    public void formata(){

    }
}
