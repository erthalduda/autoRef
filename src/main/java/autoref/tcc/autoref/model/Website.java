package autoref.tcc.autoref.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
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
    public String formataAutores() {
        String autores = "";
        Collections.sort(autor);

        if (this.autor.size() > 3) {
            final String autorPrincipal = autor.get(0);
            String sobrenome = autorPrincipal.substring(autorPrincipal.lastIndexOf(" ") + 1).toUpperCase();
            String nome = autorPrincipal.substring(0, autorPrincipal.lastIndexOf(" "));
            autores = sobrenome + ", " + nome + " et al";

        } else {
            String autor01 = autor.get(0);
            String autor02 = "";
            String autor03 = "";
            String sobrenomeAutor01 = autor01.substring(autor01.lastIndexOf(" ") + 1).toUpperCase();
            String nomeAutor01 = autor01.substring(0, autor01.lastIndexOf(" "));
            autor01 = sobrenomeAutor01 + ", " + nomeAutor01;
            autores = autor01;
            if (autor.size() > 1) {
                autor02 = autor.get(1);
                String sobrenomeAutor02 = autor02.substring(autor02.lastIndexOf(" ") + 1).toUpperCase();
                String nomeAutor02 = autor02.substring(0, autor02.lastIndexOf(" "));
                autor02 = sobrenomeAutor02 + ", " + nomeAutor02;
                autores = autor01 + "; " + autor02;
            }
            if (autor.size() > 2) {
                autor03 = autor.get(2);
                String sobrenomeAutor03 = autor03.substring(autor03.lastIndexOf(" ") + 1).toUpperCase();
                String nomeAutor03 = autor03.substring(0, autor03.lastIndexOf(" "));
                autor03 = sobrenomeAutor03 + ", " + nomeAutor03;
                autores = autor01 + "; " + autor02 + "; " + autor03;
            }
        }

        return autores.concat(". ");
    }

    @Override
    public String formataCitacoes() {
        String sobrenome = "";
        String citacaoIndiretaAutorNoTexto = "";
        String citacaoIndireta = "";
        Collections.sort(autor);
        if (this.autor.size() > 3) {
            final String autorPrincipal = autor.get(0);
            sobrenome = autorPrincipal.substring(autorPrincipal.lastIndexOf(" ") + 1);
            citacaoIndireta = "(" + sobrenome.toUpperCase().concat(" et al, ").concat(this.getAnoPublicacao()) + ")";
            citacaoIndiretaAutorNoTexto = sobrenome + " et al. (" + this.getAnoPublicacao() + ")";
        } else {
            if (this.autor.size() == 3) {
                String autor01 = autor.get(0);
                String sobrenomeAutor01 = autor01.substring(autor01.lastIndexOf(" ") + 1);

                String autor02 = autor.get(1);
                String sobrenomeAutor02 = autor02.substring(autor02.lastIndexOf(" ") + 1);

                String autor03 = autor.get(2);
                String sobrenomeAutor03 = autor03.substring(autor03.lastIndexOf(" ") + 1);

                sobrenome = sobrenomeAutor01 + "; " + sobrenomeAutor02 + "; " + sobrenomeAutor03;
                citacaoIndireta = "(" + sobrenome.toUpperCase().concat(", ").concat(this.getAnoPublicacao()) + ")";
                sobrenome = sobrenomeAutor01 + ", " + sobrenomeAutor02 + " e " + sobrenomeAutor03;
                citacaoIndiretaAutorNoTexto = sobrenome + " (" + this.getAnoPublicacao() + ")";

            }
            if (this.autor.size() == 2) {
                String autor01 = autor.get(0);
                String sobrenomeAutor01 = autor01.substring(autor01.lastIndexOf(" ") + 1);

                String autor02 = autor.get(1);
                String sobrenomeAutor02 = autor02.substring(autor02.lastIndexOf(" ") + 1);

                sobrenome = sobrenomeAutor01 + "; " + sobrenomeAutor02;
                citacaoIndireta = "(" + sobrenome.toUpperCase().concat(", ").concat(this.getAnoPublicacao()) + ")";
                sobrenome = sobrenomeAutor01 + " e " + sobrenomeAutor02;
                citacaoIndiretaAutorNoTexto = sobrenome + " (" + this.getAnoPublicacao() + ")";
            }
            if (this.autor.size() == 1) {
                String autor01 = autor.get(0);
                String sobrenomeAutor01 = autor01.substring(autor01.lastIndexOf(" ") + 1);
                sobrenome = sobrenomeAutor01;
                citacaoIndireta = "(" + sobrenome.toUpperCase().concat(", ").concat(this.getAnoPublicacao()) + ")";
                sobrenome = sobrenomeAutor01;
                citacaoIndiretaAutorNoTexto = sobrenome + " (" + this.getAnoPublicacao() + ")";
            }
        }

        String citacoes = citacaoIndireta + "\n" + citacaoIndiretaAutorNoTexto;

        this.setCitacaoIndireta(citacaoIndireta.concat(" ").concat(citacaoIndiretaAutorNoTexto));
        return citacoes;
    }

    @Override
    public void formata() {
        String autor = this.formataAutores();
        String titulo = this.getTitulo() + ". ";
        String site = this.getNomeSite() + ", " + this.getAnoPublicacao() + ".";
        String url = " Disponível em: <" + this.getUrl() + ">. Acesso em: " + this.formataData(this.getDataAcesso());
        String formatoFinal = autor + titulo + site + url;
        this.setFormatoFinal(formatoFinal);
    }

    @Override
    public String toString() {
        return super.toString() + "Website [autor=" + autor + ", nomeSite=" + nomeSite + ", anoPublicacao=" + anoPublicacao + ", url="
                + url + ", dataAcesso=" + dataAcesso + "]";
    }

   
    
}
