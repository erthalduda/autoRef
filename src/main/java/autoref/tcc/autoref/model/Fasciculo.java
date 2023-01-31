package autoref.tcc.autoref.model;

import java.sql.Date;
import java.util.Calendar;
import java.util.List;

import javax.persistence.Entity;

@Entity
public class Fasciculo extends ColecaoPublicacaoPeriodica {

	private String numeracaoAno;

	private String numeracaoVolume;

	private String numeracaoFasciculo;

	private Date dataPublicacao;

	public Fasciculo(Integer id, String titulo, String formatoFinal, String citacaoIndireta, String citacaoDireta,
			String tipo, List<Colecao> colecoes, Usuario usuario, String subtituloPublicacao, String localPublicacao,
			String editora, String dataInicio, String dataFim, String issn, String numeracaoAno, String numeracaoVolume,
			String numeracaoFasciculo, Date dataPublicacao) {
		super(id, titulo, formatoFinal, citacaoIndireta, citacaoDireta, tipo, colecoes, usuario, subtituloPublicacao,
				localPublicacao, editora, dataInicio, dataFim, issn);
		this.numeracaoAno = numeracaoAno;
		this.numeracaoVolume = numeracaoVolume;
		this.numeracaoFasciculo = numeracaoFasciculo;
		this.dataPublicacao = dataPublicacao;
	}

	public Fasciculo() {

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

	public Date getDataPublicacao() {
		return this.dataPublicacao;
	}

	public void setDataPublicacao(Date dataPublicacao) {
		this.dataPublicacao = dataPublicacao;
	}

	@Override
	public void formata() {
		Calendar calendario = Calendar.getInstance();
		calendario.setTime(this.getDataPublicacao());
		int mes = calendario.get(Calendar.MONTH);
		int dia = calendario.get(Calendar.DAY_OF_MONTH);
		int ano = calendario.get(Calendar.YEAR);

		String titulo = this.getTitulo().toUpperCase();
		String subtitulo = "";
		if (this.getSubtituloPublicacao() != null) {
			subtitulo = ": " + this.getSubtituloPublicacao() + ". ";
		} else {
			subtitulo = ". ";
		}
		String localPublicacao = this.getLocalPublicacao() + ": ";
		String editora = this.getEditora();
		if (this.getNumeracaoAno() != null) {
			numeracaoAno = ", " + this.getNumeracaoAno() + ". ";
		}
		String volume = "";
		if (this.getNumeracaoVolume() != null) {
			volume = ", v. " + this.getNumeracaoVolume();
		}
		String numeracaoFasciculo = ", n." + this.getNumeracaoFasciculo() + ", ";
		String dataPublicacao = this.formataData(this.getDataPublicacao());
		String formatoFinal = titulo + subtitulo + localPublicacao + editora + volume
				+ numeracaoFasciculo + dataPublicacao;
		this.setFormatoFinal(formatoFinal);
	}

	@Override
	public String toString() {
		return super.toString() + "Fasciculo [numeracaoAno=" + numeracaoAno + ", numeracaoVolume=" + numeracaoVolume
				+ ", numeracaoFasciculo=" + numeracaoFasciculo + ", dataPublicacao=" + dataPublicacao + "]";
	}

}
