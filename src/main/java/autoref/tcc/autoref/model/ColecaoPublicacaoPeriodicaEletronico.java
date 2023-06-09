package autoref.tcc.autoref.model;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Entity;

@Entity
public class ColecaoPublicacaoPeriodicaEletronico extends ColecaoPublicacaoPeriodica {

	private String doi;

	private String url;

	private LocalDate dataAcesso;

	public ColecaoPublicacaoPeriodicaEletronico(Integer id, String titulo, String formatoFinal, String citacaoIndireta,
			String citacaoDireta, String tipo, List<Colecao> colecoes, Usuario usuario, String subtituloPublicacao,
			String localPublicacao, String editora, String dataInicio, String dataFim, String issn, String doi,
			String url,
			LocalDate dataAcesso) {
		super(id, titulo, formatoFinal, citacaoIndireta, citacaoDireta, tipo, colecoes, usuario, subtituloPublicacao,
				localPublicacao, editora, dataInicio, dataFim, issn);
		this.doi = doi;
		this.url = url;
		this.dataAcesso = dataAcesso;
	}

	public ColecaoPublicacaoPeriodicaEletronico() {
	}

	public String getDoi() {
		return this.doi;
	}

	public void setDoi(String doi) {
		this.doi = doi;
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

		String titulo = this.getTitulo().toUpperCase();
		String subtitulo = ". ";
		if ((this.getSubtituloPublicacao() != null) && (!this.getSubtituloPublicacao().equals(""))) {
			subtitulo = ": " + this.getSubtituloPublicacao() + ". ";
		}
		String localPublicacao = this.getLocalPublicacao() + ": ";
		String editora = this.getEditora() + ", ";
		String duracao = "";
		if ((this.getDataFim() != null) && (!this.getDataFim().equals(""))) {
			duracao = this.getDataInicio() + "-" + this.getDataFim() + ".";
		} else {
			duracao = this.getDataInicio() + "- .";
		}
		String issn = "";
		if ((this.getIssn() != null) && (!this.getIssn().equals(""))) {
			issn = " ISSN " + this.getIssn() + ".";
		}
		String doi = "";
		if ((this.getDoi() != null) && (!this.getDoi().equals(""))) {
			doi = " DOI " + this.getDoi() + ".";
		}
		String data = this.formataData(this.getDataAcesso());
		String url = " Disponível em: " + this.getUrl() + ". Acesso em: " + data + ".";
		String formatoFinal = titulo + subtitulo + localPublicacao + editora + duracao + issn + doi + url;
		this.setFormatoFinal(formatoFinal);
	}

	@Override
	public String toString() {
		return super.toString() + "ColecaoPublicacaoPeriodicaEletronico [doi=" + doi + ", url=" + url + ", dataAcesso="
				+ dataAcesso + "]";
	}

}
