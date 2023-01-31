package autoref.tcc.autoref.model;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.persistence.Basic;
import javax.persistence.Entity;

@Entity
public class TrabalhoAcademico extends Referencia {

    @Basic
    private ArrayList<String> autor;

    private String subtitulo;

    private String anoDeposito;

    private String tipoTrabalho;

    private String grauFormacao;

    private String curso;

    private String vinculacaoAcademica;

    private String anoDefesa;

    private String localDefesa;

    public TrabalhoAcademico(Integer id, String titulo, String formatoFinal, String citacaoIndireta,
            String citacaoDireta, String tipo, List<Colecao> colecoes, Usuario usuario, ArrayList<String> autor,
            String subtitulo, String anoDeposito, String tipoTrabalho, String grauFormacao, String curso,
            String vinculacaoAcademica, String anoDefesa, String localDefesa) {
        super(id, titulo, formatoFinal, citacaoIndireta, citacaoDireta, tipo, colecoes, usuario);
        this.autor = autor;
        this.subtitulo = subtitulo;
        this.anoDeposito = anoDeposito;
        this.tipoTrabalho = tipoTrabalho;
        this.grauFormacao = grauFormacao;
        this.curso = curso;
        this.vinculacaoAcademica = vinculacaoAcademica;
        this.anoDefesa = anoDefesa;
        this.localDefesa = localDefesa;
    }

    public TrabalhoAcademico() {

    }

    public ArrayList<String> getAutor() {
        return this.autor;
    }

    public void setAutor(ArrayList<String> autor) {
        this.autor = autor;
    }

    public String getSubtitulo() {
        return this.subtitulo;
    }

    public void setSubtitulo(String subtitulo) {
        this.subtitulo = subtitulo;
    }

    public String getAnoDeposito() {
        return this.anoDeposito;
    }

    public void setAnoDeposito(String anoDeposito) {
        this.anoDeposito = anoDeposito;
    }

    public String getTipoTrabalho() {
        return this.tipoTrabalho;
    }

    public void setTipoTrabalho(String tipoTrabalho) {
        this.tipoTrabalho = tipoTrabalho;
    }

    public String getGrauFormacao() {
        return this.grauFormacao;
    }

    public void setGrauFormacao(String grauFormacao) {
        this.grauFormacao = grauFormacao;
    }

    public String getCurso() {
        return this.curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public String getVinculacaoAcademica() {
        return this.vinculacaoAcademica;
    }

    public void setVinculacaoAcademica(String vinculacaoAcademica) {
        this.vinculacaoAcademica = vinculacaoAcademica;
    }

    public String getAnoDefesa() {
        return this.anoDefesa;
    }

    public void setAnoDefesa(String anoDefesa) {
        this.anoDefesa = anoDefesa;
    }

    public String getLocalDefesa() {
        return this.localDefesa;
    }

    public void setLocalDefesa(String localDefesa) {
        this.localDefesa = localDefesa;
    }

    @Override
    public String formataCitacoes() {
        String sobrenome = "";
        String citacaoDiretaAutorNoTexto = "";
        String citacaoDireta = "";
        String citacaoIndiretaAutorNoTexto = "";
        String citacaoIndireta = "";
        Collections.sort(autor);
        if (this.autor.size() > 3) {
            final String autorPrincipal = autor.get(0);
            sobrenome = autorPrincipal.substring(autorPrincipal.lastIndexOf(" ") + 1) + " et al";
        } else {
            if (this.autor.size() == 3) {
                String autor01 = autor.get(0);
                String sobrenomeAutor01 = autor01.substring(autor01.lastIndexOf(" ") + 1);

                String autor02 = autor.get(1);
                String sobrenomeAutor02 = autor02.substring(autor02.lastIndexOf(" ") + 1);

                String autor03 = autor.get(2);
                String sobrenomeAutor03 = autor03.substring(autor03.lastIndexOf(" ") + 1);

                sobrenome = sobrenomeAutor01 + "; " + sobrenomeAutor02 + "; " + sobrenomeAutor03;
                citacaoIndireta = "(" + sobrenome.toUpperCase().concat(", ").concat(this.getAnoDefesa()) + ")";
                citacaoDireta = "("
                        + sobrenome.toUpperCase().concat(", ").concat(this.getAnoDefesa()).concat(", p. X.)");
                sobrenome = sobrenomeAutor01 + ", " + sobrenomeAutor02 + " e " + sobrenomeAutor03;
                citacaoIndiretaAutorNoTexto = sobrenome + " (" + this.getAnoDefesa() + ")";
                citacaoDiretaAutorNoTexto = sobrenome + " (" + this.getAnoDefesa() + ", p. X.)";

            }
            if (this.autor.size() == 2) {
                String autor01 = autor.get(0);
                String sobrenomeAutor01 = autor01.substring(autor01.lastIndexOf(" ") + 1);

                String autor02 = autor.get(1);
                String sobrenomeAutor02 = autor02.substring(autor02.lastIndexOf(" ") + 1);

                sobrenome = sobrenomeAutor01 + "; " + sobrenomeAutor02;
                citacaoIndireta = "(" + sobrenome.toUpperCase().concat(", ").concat(this.getAnoDefesa()) + ")";
                citacaoDireta = "("
                        + sobrenome.toUpperCase().concat(", ").concat(this.getAnoDefesa()).concat(", p. X.)");
                sobrenome = sobrenomeAutor01 + " e " + sobrenomeAutor02;
                citacaoIndiretaAutorNoTexto = sobrenome + " (" + this.getAnoDefesa() + ")";
                citacaoDiretaAutorNoTexto = sobrenome + " (" + this.getAnoDefesa() + ", p. X.)";
            }
            if (this.autor.size() == 1) {
                String autor01 = autor.get(0);
                String sobrenomeAutor01 = autor01.substring(autor01.lastIndexOf(" ") + 1);
                sobrenome = sobrenomeAutor01;
                citacaoIndireta = "(" + sobrenome.toUpperCase().concat(", ").concat(this.getAnoDefesa()) + ")";
                citacaoDireta = "("
                        + sobrenome.toUpperCase().concat(", ").concat(this.getAnoDefesa()).concat(", p. X.)");
                sobrenome = sobrenomeAutor01;
                citacaoIndiretaAutorNoTexto = sobrenome + " (" + this.getAnoDefesa() + ")";
                citacaoDiretaAutorNoTexto = sobrenome + " (" + this.getAnoDefesa() + ", p. X.)";
            }
        }

        String citacoes = citacaoIndireta + "\n" + citacaoIndiretaAutorNoTexto + "\n" + citacaoDireta + "\n"
                + citacaoDiretaAutorNoTexto;

        this.setCitacaoDireta(citacaoDireta.concat(" ").concat(citacaoDiretaAutorNoTexto));
        this.setCitacaoIndireta(citacaoIndireta.concat(" ").concat(citacaoIndiretaAutorNoTexto));
        return citacoes;
    }

    @Override
    public String formataAutores() {
        String autores = "";
        Collections.sort(autor);

        if (this.autor.size() > 3) {
            final String autorPrincipal = autor.get(0);
            String sobrenome = autorPrincipal.substring(autorPrincipal.lastIndexOf(" ") + 1).toUpperCase();
            String nome = autorPrincipal.substring(0, autorPrincipal.lastIndexOf(" "));
            autores = sobrenome + ", " + nome + " et al. ";

        } else {
            String autor01 = autor.get(0);
            String autor02 = "";
            String autor03 = "";
            String sobrenomeAutor01 = autor01.substring(autor01.lastIndexOf(" ") + 1).toUpperCase();
            String nomeAutor01 = autor01.substring(0, autor01.lastIndexOf(" "));
            autor01 = sobrenomeAutor01 + ", " + nomeAutor01;
            autores = autor01;
            if (!autor.get(1).isEmpty()) {
                autor02 = autor.get(1);
                String sobrenomeAutor02 = autor02.substring(autor02.lastIndexOf(" ") + 1).toUpperCase();
                String nomeAutor02 = autor02.substring(0, autor02.lastIndexOf(" "));
                autor02 = sobrenomeAutor02 + ", " + nomeAutor02;
                autores = autor01 + "; " + autor02;
            }
            if (!autor.get(2).isEmpty()) {
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
    public void formata() {
        String autores = this.formataAutores();
        String titulo = this.getTitulo().toUpperCase();
        String subtitulo = "";
        if (this.getSubtitulo() != null) {
            subtitulo = ": " + this.getSubtitulo() + ". ";
        } else {
            subtitulo = ". ";
        }
        String anoDeposito = this.getAnoDeposito() + ". ";
        String tipoTrabalho = this.getTipoTrabalho() + " ";
        String curso = "(" + this.getCurso() + ") - ";
        String vinculacaoAcademica = this.getVinculacaoAcademica() + ". ";
        String localDefesa = this.getLocalDefesa() + ", " + this.getAnoDefesa() + ".";
        String formatoFinal = autores + titulo + subtitulo + anoDeposito + tipoTrabalho + curso + vinculacaoAcademica
                + localDefesa;
        this.formatoFinal = formatoFinal;
    }

    @Override
    public String toString() {
        return super.toString() + "TrabalhoAcademico [autor=" + autor + ", subtitulo=" + subtitulo + ", anoDeposito="
                + anoDeposito
                + ", tipoTrabalho=" + tipoTrabalho + ", grauFormacao=" + grauFormacao + ", curso=" + curso
                + ", vinculacaoAcademica=" + vinculacaoAcademica + ", anoDefesa=" + anoDefesa + ", localDefesa="
                + localDefesa + "]";
    }

}
