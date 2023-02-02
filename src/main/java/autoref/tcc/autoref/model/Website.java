package autoref.tcc.autoref.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Basic;
import javax.persistence.Entity;

@Entity
public class Website extends Referencia {

    @Basic
    private ArrayList<String> autor;
    private String nomeSite;
    private String anoPublicacao;
    private String url;
    private LocalDate dataAcesso;

    public Website(Integer id, String titulo, String formatoFinal, String citacaoIndireta, String citacaoDireta,
            String tipo, List<Colecao> colecoes, Usuario usuario, ArrayList<String> autor, String nomeSite,
            String anoPublicacao, String url, LocalDate dataAcesso) {
        super(id, titulo, formatoFinal, citacaoIndireta, citacaoDireta, tipo, colecoes, usuario);
        this.autor = autor;
        this.nomeSite = nomeSite;
        this.anoPublicacao = anoPublicacao;
        this.url = url;
        this.dataAcesso = dataAcesso;
    }

    public Website() {

    }

    public ArrayList<String> getAutor() {
        return this.autor;
    }

    public void setAutor(ArrayList<String> autor) {
        this.autor = autor;
    }

    public String getNomeSite() {
        return this.nomeSite;
    }

    public void setNomeSite(String nomeSite) {
        this.nomeSite = nomeSite;
    }

    public String getAnoPublicacao() {
        return this.anoPublicacao;
    }

    public void setAnoPublicacao(String anoPublicacao) {
        this.anoPublicacao = anoPublicacao;
    }

    public String getUrl() {
        return this.url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public LocalDate getDataAcesso() {
        return this.dataAcesso;
    }

    public void setDataAcesso(LocalDate dataAcesso) {
        this.dataAcesso = dataAcesso;
    }

    @Override
    public void formata() {
        String autor = this.formataAutores();
        String titulo = this.getTitulo();
        String site = this.getNomeSite() + ", " + this.getAnoPublicacao() + ".";
        String url = " Disponível em: " + this.getUrl() + ". Acesso em: " + this.formataData(this.getDataAcesso());
        String formatoFinal = autor + titulo + site + url;
        this.setFormatoFinal(formatoFinal);
    }

}
