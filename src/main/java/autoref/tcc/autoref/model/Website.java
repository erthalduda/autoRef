package autoref.tcc.autoref.model;

import java.time.LocalDate;
import java.util.ArrayList;

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

}
