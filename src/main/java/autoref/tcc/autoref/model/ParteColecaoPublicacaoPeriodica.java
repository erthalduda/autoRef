package autoref.tcc.autoref.model;

import java.util.List;

import javax.persistence.Entity;

@Entity
public class ParteColecaoPublicacaoPeriodica extends ColecaoPublicacaoPeriodica {

	private String periodoConsultado;

	public ParteColecaoPublicacaoPeriodica(Integer id, String titulo, String formatoFinal, String citacaoIndireta,
			String citacaoDireta, String tipo, List<Colecao> colecoes, Usuario usuario, String subtituloPublicacao,
			String localPublicacao, String editora, String dataInicio, String dataFim, String issn,
			String periodoConsultado) {
		super(id, titulo, formatoFinal, citacaoIndireta, citacaoDireta, tipo, colecoes, usuario, subtituloPublicacao,
				localPublicacao, editora, dataInicio, dataFim, issn);
		this.periodoConsultado = periodoConsultado;
	}

	public ParteColecaoPublicacaoPeriodica() {
	}

	public String getPeriodoConsultado() {
		return this.periodoConsultado;
	}

	public void setPeriodoConsultado(String periodoConsultado) {
		this.periodoConsultado = periodoConsultado;
	}

	@Override
	public String toString() {
		return super.toString() + "ParteColecaoPublicacaoPeriodica [periodoConsultado=" + periodoConsultado + "]";
	}

	@Override
	public void formata() {
		String titulo = this.getTitulo().toUpperCase();
		String subtitulo = "";
		if (this.getSubtituloPublicacao() != null) {
			subtitulo = ": " + this.getSubtituloPublicacao() + ". ";
		}
		String localPublicacao = this.getLocalPublicacao() + ": ";
		String editora = this.getEditora() + ", ";
		String duracao = "";
		if (this.getDataFim().length() != 0) {
			duracao = this.getDataInicio() + "-" + this.getDataFim() + ". ";
		} else {
			duracao = this.getDataInicio() + "- . ";
		}
		String periodoConsultado = this.getPeriodoConsultado() + ".";
		String issn = "";
		if (this.getIssn() != null) {
			issn = " ISSN " + this.getIssn() + ".";
		}
		String formatoFinal = titulo + subtitulo + localPublicacao + editora + duracao + periodoConsultado + issn;
		this.setFormatoFinal(formatoFinal);
	}

}
