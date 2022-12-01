package autoref.tcc.autoref.model;
import javax.persistence.Entity;

@Entity
public class Fasciculo extends ColecaoPublicacaoPeriodica {

	private String numeracaoAno;

	private String numeracaoVolume;

	private String numeracaoFasciculo;

	private String dataPublicacao;

	public Fasciculo(){
		
	}

	public Fasciculo(Integer id, String titulo, Usuario usuario, String subtituloPublicacao, String localPublicacao, String editora,
			String dataInicio, String dataFim, String issn, String numeracaoAno, String numeracaoVolume,
			String numeracaoFasciculo, String dataPublicacao) {
		super(id, titulo, usuario, subtituloPublicacao, localPublicacao, editora, dataInicio, dataFim, issn);
		this.numeracaoAno = numeracaoAno;
		this.numeracaoVolume = numeracaoVolume;
		this.numeracaoFasciculo = numeracaoFasciculo;
		this.dataPublicacao = dataPublicacao;
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

	public String getNumeracaoFasciculo() {
		return this.numeracaoFasciculo;
	}

	public void setNumeracaoFasciculo(String numeracaoFasciculo) {
		this.numeracaoFasciculo = numeracaoFasciculo;
	}

	public String getDataPublicacao() {
		return this.dataPublicacao;
	}

	public void setDataPublicacao(String dataPublicacao) {
		this.dataPublicacao = dataPublicacao;
	}

}
