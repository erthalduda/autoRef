package autoref.tcc.autoref.model;

import java.sql.Date;
import java.util.List;

import javax.persistence.Entity;

@Entity
public class ColecaoPublicacaoPeriodicaEletronico extends ColecaoPublicacaoPeriodica {

	private String doi;

	private String url;

	private Date dataAcesso;

	public ColecaoPublicacaoPeriodicaEletronico(Integer id, String titulo, String formatoFinal, String citacaoIndireta,
			String citacaoDireta, String tipo, List<Colecao> colecoes, Usuario usuario, String subtituloPublicacao,
			String localPublicacao, String editora, String dataInicio, String dataFim, String issn, String doi,
			String url,
			Date dataAcesso) {
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

	public Date getDataAcesso() {
		return this.dataAcesso;
	}

	public void setDataAcesso(Date dataAcesso) {
		this.dataAcesso = dataAcesso;
	}

	@Override
	public void formata() {

		String titulo = this.getTitulo().toUpperCase();
		String subtitulo = "";
		if (this.getSubtituloPublicacao() != null) {
			subtitulo = ": " + this.getSubtituloPublicacao() + ". ";
		} else {
			subtitulo = ". ";
		}
		String localPublicacao = this.getLocalPublicacao() + ": ";
		String editora = this.getEditora() + ", ";
		String duracao = "";
		if (this.getDataFim().length() != 0) {
			duracao = this.getDataInicio() + "-" + this.getDataFim() + ". ";
		} else {
			duracao = this.getDataInicio() + "- . ";
		}
		String issn = "";
		if (this.getIssn().length() != 0) {
			issn = "ISSN " + this.getIssn() + ". ";
		}
		String doi = "";
		if (this.getDoi().length() != 0) {
			doi = "DOI " + this.getDoi();
		}
		String data = this.formataData(this.getDataAcesso());
		String url = ". Disponível em: " + this.getUrl() + ". Acesso em: " + data + ".";
		String formatoFinal = titulo + subtitulo + localPublicacao + editora + duracao + issn + doi + url;
		this.setFormatoFinal(formatoFinal);
	}

	@Override
	public String toString() {
		return super.toString() + "ColecaoPublicacaoPeriodicaEletronico [doi=" + doi + ", url=" + url + ", dataAcesso="
				+ dataAcesso + "]";
	}

}
