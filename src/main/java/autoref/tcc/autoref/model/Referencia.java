package autoref.tcc.autoref.model;

import javax.persistence.*;

import lombok.EqualsAndHashCode;
import lombok.ToString;

import java.time.LocalDate;
import java.util.List;

@ToString(of = "id")
@EqualsAndHashCode(of = "id")
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
    @Column(length = 1056)
    protected String todosOsDados;

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

    public String getTodosOsDados() {
        return this.todosOsDados;
    }

    public void setTodosOsDados() {
        this.todosOsDados = this.toString();
    }

    public String formataAutores() {
        return null;
    }

    public String formataCitacoes() {
        return null;
    }

    public void formata() {

    }

    public String formataData(LocalDate data) {
        String mesString = "";
        String dataString = "";
        int mes = data.getMonthValue();
        int dia = data.getDayOfMonth();
        int ano = data.getYear();

        switch (mes) {
            case 1:
                mesString = " jan. ";
                break;
            case 2:
                mesString = " fev. ";
                break;
            case 3:
                mesString = " mar. ";
                break;
            case 4:
                mesString = " abr. ";
                break;
            case 5:
                mesString = " maio ";
                break;
            case 6:
                mesString = " jun. ";
                break;
            case 7:
                mesString = " jul. ";
                break;
            case 8:
                mesString = " ago. ";
                break;
            case 9:
                mesString = " set. ";
                break;
            case 10:
                mesString = " out. ";
                break;
            case 11:
                mesString = " nov. ";
                break;
            case 12:
                mesString = " dez. ";
                break;
        }
        dataString = dia + mesString + ano;
        return dataString;
    }
}
