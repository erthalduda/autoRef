package autoref.tcc.autoref.model;
import javax.persistence.Entity;

@Entity
public class Artigo extends ColecaoPublicacaoPeriodica {

	private String tituloArtigo;

	private String subtituloArtigo;

	private String numeracaoAno;

	private String numeracaoVolume;

	private String numero;

	private String edicao;

	private String tomo;

	private String paginaInicial;

	private String paginaFinal;

	private String dataPublicacao;

	public Artigo() {
	}
	
	public Artigo(Integer id, String titulo, Usuario usuario, String subtituloPublicacao, String localPublicacao,
			String editora, String dataInicio, String dataFim, String issn, String tituloArtigo, String subtituloArtigo,
			String numeracaoAno, String numeracaoVolume, String numero, String edicao, String tomo,
			String paginaInicial, String paginaFinal, String dataPublicacao) {
		super(id, titulo, usuario, subtituloPublicacao, localPublicacao, editora, dataInicio, dataFim, issn);
		this.tituloArtigo = tituloArtigo;
		this.subtituloArtigo = subtituloArtigo;
		this.numeracaoAno = numeracaoAno;
		this.numeracaoVolume = numeracaoVolume;
		this.numero = numero;
		this.edicao = edicao;
		this.tomo = tomo;
		this.paginaInicial = paginaInicial;
		this.paginaFinal = paginaFinal;
		this.dataPublicacao = dataPublicacao;
	}

	public String getTituloArtigo() {
		return this.tituloArtigo;
	}

	public void setTituloArtigo(String tituloArtigo) {
		this.tituloArtigo = tituloArtigo;
	}

	public String getSubtituloArtigo() {
		return this.subtituloArtigo;
	}

	public void setSubtituloArtigo(String subtituloArtigo) {
		this.subtituloArtigo = subtituloArtigo;
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

	public String getDataPublicacao() {
		return this.dataPublicacao;
	}

	public void setDataPublicacao(String dataPublicacao) {
		this.dataPublicacao = dataPublicacao;
	}

}
