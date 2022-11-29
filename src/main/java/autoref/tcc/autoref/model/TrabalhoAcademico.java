package autoref.tcc.autoref.model;

import javax.persistence.Entity;

@Entity
public class TrabalhoAcademico extends Referencia {

	private String autor;

    private String subtitulo;

    private String anoDeposito;

    private String tipoTrabalho;

    private String grauFormacao;

    private String curso;

    private String vinculacaoAcademica;

    private String anoDefesa;

    private String localDefesa;

    public TrabalhoAcademico(){

    }

    public TrabalhoAcademico(Integer id, String titulo, String autor, String subtitulo, String anoDeposito,
            String tipoTrabalho, String grauFormacao, String curso, String vinculacaoAcademica, String anoDefesa,
            String localDefesa) {
        super(id, titulo);
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

    public String getAutor() {
        return this.autor;
    }

    public void setAutor(String autor) {
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



}
