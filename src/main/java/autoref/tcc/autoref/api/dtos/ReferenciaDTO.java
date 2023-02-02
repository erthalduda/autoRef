package autoref.tcc.autoref.api.dtos;

import javax.persistence.Basic;

import java.time.LocalDate;
import java.util.ArrayList;

public class ReferenciaDTO {

    protected String titulo;
    protected String formatoFinal;
    protected String citacaoIndireta;
    protected String citacaoDireta;
    protected String tipo;
    @Basic
    protected ArrayList<String> autor;
    protected String subtituloArtigo;
    protected String tituloPeriodico;
    protected String subtituloPeriodico;
    protected String localPublicacao;
    protected String numeracaoAno;
    protected String numeracaoVolume;
    protected String numero;
    protected String edicao;
    protected String tomo;
    protected String paginaInicial;
    protected String paginaFinal;
    protected LocalDate dataPublicacao;
    protected String subtituloPublicacao;
    protected String editora;
    protected String dataInicio;
    protected String dataFim;
    protected String issn;
    protected String doi;
    protected String descricaoDoSuporte;
    protected String numeracaoFasciculo;
    protected String subtitulo;
    protected String anoPublicacao;
    protected String cidade;
    protected String curso;
    protected String anoEntrega;
    protected String quantidadePaginas;
    protected String url;
    protected LocalDate dataAcesso;
    protected String periodoConsultado;
    protected String tituloParte;
    protected String secao;
    protected int capitulo;
    protected int volume;
    protected String anoDeposito;
    protected String tipoTrabalho;
    protected String grauFormacao;
    protected String vinculacaoAcademica;
    protected String anoDefesa;
    protected String autorParte;
    protected String localDefesa;
    protected String nomeSite;

    public ReferenciaDTO(String titulo, String formatoFinal, String citacaoIndireta, String citacaoDireta, String tipo,
            ArrayList<String> autor, String subtituloArtigo, String tituloPeriodico, String subtituloPeriodico,
            String localPublicacao, String numeracaoAno, String numeracaoVolume, String numero, String edicao,
            String tomo, String paginaInicial, String paginaFinal, LocalDate dataPublicacao, String subtituloPublicacao,
            String editora, String dataInicio, String dataFim, String issn, String doi, String descricaoDoSuporte,
            String numeracaoFasciculo, String subtitulo, String anoPublicacao, String cidade, String curso,
            String anoEntrega, String quantidadePaginas, String url, LocalDate dataAcesso, String periodoConsultado,
            String tituloParte, String secao, int capitulo, int volume, String anoDeposito, String tipoTrabalho,
            String grauFormacao, String vinculacaoAcademica, String anoDefesa, String autorParte, String localDefesa,
            String nomeSite) {
        this.titulo = titulo;
        this.formatoFinal = formatoFinal;
        this.citacaoIndireta = citacaoIndireta;
        this.citacaoDireta = citacaoDireta;
        this.tipo = tipo;
        this.autor = autor;
        this.subtituloArtigo = subtituloArtigo;
        this.tituloPeriodico = tituloPeriodico;
        this.subtituloPeriodico = subtituloPeriodico;
        this.localPublicacao = localPublicacao;
        this.numeracaoAno = numeracaoAno;
        this.numeracaoVolume = numeracaoVolume;
        this.numero = numero;
        this.edicao = edicao;
        this.tomo = tomo;
        this.paginaInicial = paginaInicial;
        this.paginaFinal = paginaFinal;
        this.dataPublicacao = dataPublicacao;
        this.subtituloPublicacao = subtituloPublicacao;
        this.editora = editora;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.issn = issn;
        this.doi = doi;
        this.descricaoDoSuporte = descricaoDoSuporte;
        this.numeracaoFasciculo = numeracaoFasciculo;
        this.subtitulo = subtitulo;
        this.anoPublicacao = anoPublicacao;
        this.cidade = cidade;
        this.curso = curso;
        this.anoEntrega = anoEntrega;
        this.quantidadePaginas = quantidadePaginas;
        this.url = url;
        this.dataAcesso = dataAcesso;
        this.periodoConsultado = periodoConsultado;
        this.tituloParte = tituloParte;
        this.secao = secao;
        this.capitulo = capitulo;
        this.volume = volume;
        this.anoDeposito = anoDeposito;
        this.tipoTrabalho = tipoTrabalho;
        this.grauFormacao = grauFormacao;
        this.vinculacaoAcademica = vinculacaoAcademica;
        this.anoDefesa = anoDefesa;
        this.autorParte = autorParte;
        this.localDefesa = localDefesa;
        this.nomeSite = nomeSite;
    }

    public ReferenciaDTO() {

    }

    public String getTitulo() {
        return this.titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getFormatoFinal() {
        return this.formatoFinal;
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
        return this.tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public ArrayList<String> getAutor() {
        return this.autor;
    }

    public void setAutor(ArrayList<String> autor) {
        this.autor = autor;
    }

    public String getSubtituloArtigo() {
        return this.subtituloArtigo;
    }

    public void setSubtituloArtigo(String subtituloArtigo) {
        this.subtituloArtigo = subtituloArtigo;
    }

    public String getTituloPeriodico() {
        return this.tituloPeriodico;
    }

    public void setTituloPeriodico(String tituloPeriodico) {
        this.tituloPeriodico = tituloPeriodico;
    }

    public String getSubtituloPeriodico() {
        return this.subtituloPeriodico;
    }

    public void setSubtituloPeriodico(String subtituloPeriodico) {
        this.subtituloPeriodico = subtituloPeriodico;
    }

    public String getLocalPublicacao() {
        return this.localPublicacao;
    }

    public void setLocalPublicacao(String localPublicacao) {
        this.localPublicacao = localPublicacao;
    }

    public String getNumeracaoAno() {
        return this.numeracaoAno;
    }

    public void setNumeracaoAno(String numeracaoAno) {
        this.numeracaoAno = numeracaoAno;
    }

    public String getNumeracaoVolume() {
        return this.numeracaoVolume;
    }

    public void setNumeracaoVolume(String numeracaoVolume) {
        this.numeracaoVolume = numeracaoVolume;
    }

    public String getNumero() {
        return this.numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getEdicao() {
        return this.edicao;
    }

    public void setEdicao(String edicao) {
        this.edicao = edicao;
    }

    public String getTomo() {
        return this.tomo;
    }

    public void setTomo(String tomo) {
        this.tomo = tomo;
    }

    public String getPaginaInicial() {
        return this.paginaInicial;
    }

    public void setPaginaInicial(String paginaInicial) {
        this.paginaInicial = paginaInicial;
    }

    public String getPaginaFinal() {
        return this.paginaFinal;
    }

    public void setPaginaFinal(String paginaFinal) {
        this.paginaFinal = paginaFinal;
    }

    public LocalDate getDataPublicacao() {
        return this.dataPublicacao;
    }

    public void setDataPublicacao(LocalDate dataPublicacao) {
        this.dataPublicacao = dataPublicacao;
    }

    public String getSubtituloPublicacao() {
        return this.subtituloPublicacao;
    }

    public void setSubtituloPublicacao(String subtituloPublicacao) {
        this.subtituloPublicacao = subtituloPublicacao;
    }

    public String getEditora() {
        return this.editora;
    }

    public void setEditora(String editora) {
        this.editora = editora;
    }

    public String getDataInicio() {
        return this.dataInicio;
    }

    public void setDataInicio(String dataInicio) {
        this.dataInicio = dataInicio;
    }

    public String getDataFim() {
        return this.dataFim;
    }

    public void setDataFim(String dataFim) {
        this.dataFim = dataFim;
    }

    public String getIssn() {
        return this.issn;
    }

    public void setIssn(String issn) {
        this.issn = issn;
    }

    public String getDoi() {
        return this.doi;
    }

    public void setDoi(String doi) {
        this.doi = doi;
    }

    public String getDescricaoDoSuporte() {
        return this.descricaoDoSuporte;
    }

    public void setDescricaoDoSuporte(String descricaoDoSuporte) {
        this.descricaoDoSuporte = descricaoDoSuporte;
    }

    public String getNumeracaoFasciculo() {
        return this.numeracaoFasciculo;
    }

    public void setNumeracaoFasciculo(String numeracaoFasciculo) {
        this.numeracaoFasciculo = numeracaoFasciculo;
    }

    public String getSubtitulo() {
        return this.subtitulo;
    }

    public void setSubtitulo(String subtitulo) {
        this.subtitulo = subtitulo;
    }

    public String getAnoPublicacao() {
        return this.anoPublicacao;
    }

    public void setAnoPublicacao(String anoPublicacao) {
        this.anoPublicacao = anoPublicacao;
    }

    public String getCidade() {
        return this.cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getCurso() {
        return this.curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public String getAnoEntrega() {
        return this.anoEntrega;
    }

    public void setAnoEntrega(String anoEntrega) {
        this.anoEntrega = anoEntrega;
    }

    public String getQuantidadePaginas() {
        return this.quantidadePaginas;
    }

    public void setQuantidadePaginas(String quantidadePaginas) {
        this.quantidadePaginas = quantidadePaginas;
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

    public String getPeriodoConsultado() {
        return this.periodoConsultado;
    }

    public void setPeriodoConsultado(String periodoConsultado) {
        this.periodoConsultado = periodoConsultado;
    }

    public String getTituloParte() {
        return this.tituloParte;
    }

    public void setTituloParte(String tituloParte) {
        this.tituloParte = tituloParte;
    }

    public String getSecao() {
        return this.secao;
    }

    public void setSecao(String secao) {
        this.secao = secao;
    }

    public int getCapitulo() {
        return this.capitulo;
    }

    public void setCapitulo(int capitulo) {
        this.capitulo = capitulo;
    }

    public int getVolume() {
        return this.volume;
    }

    public void setVolume(int volume) {
        this.volume = volume;
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

    public String getAutorParte() {
        return this.autorParte;
    }

    public void setAutorParte(String autorParte) {
        this.autorParte = autorParte;
    }

    public String getLocalDefesa() {
        return this.localDefesa;
    }

    public void setLocalDefesa(String localDefesa) {
        this.localDefesa = localDefesa;
    }

    public String getNomeSite() {
        return this.nomeSite;
    }

    public void setNomeSite(String nomeSite) {
        this.nomeSite = nomeSite;
    }

}