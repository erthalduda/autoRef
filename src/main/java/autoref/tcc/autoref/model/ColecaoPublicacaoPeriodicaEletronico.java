package autoref.tcc.autoref.model;

import java.sql.Date;
import java.time.LocalDate;
import java.util.Calendar;
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

		Calendar calendario = Calendar.getInstance();
		calendario.setTime(this.getDataAcesso());
		int mes = calendario.get(Calendar.MONTH);
		int dia = calendario.get(Calendar.DAY_OF_MONTH);
		int ano = calendario.get(Calendar.YEAR);

		String titulo = this.getTitulo().toUpperCase();
		String subtitulo = "";
		if (!this.getSubtituloPublicacao().equals(" ")) {
			subtitulo = ": " + this.getSubtituloPublicacao() + ". ";
		} else {
			subtitulo = ". ";
		}
		String localPublicacao = this.getLocalPublicacao() + ": ";
		String editora = this.getEditora() + ", ";
		String dataFim = this.getDataFim() + ". ";
		String dataInicio = this.getDataInicio() + "-" + dataFim;
		String issn = "ISSN " + this.getIssn();
		String doi = "";
		if (!this.getDoi().equals(" ")) {
			doi = ". DOI " + this.getDoi();
		} else {
			doi = "";
		}
		String mesString = "";
		switch (mes) {
			case 1:
				mesString = " jan. ";
				break;
			case 2:
				mesString = " fev. ";
				break;
			case 3:
				mesString = " mar. ";
				break;
			case 4:
				mesString = " abr. ";
				break;
			case 5:
				mesString = " maio ";
				break;
			case 6:
				mesString = " jun. ";
				break;
			case 7:
				mesString = " jul. ";
				break;
			case 8:
				mesString = " ago. ";
				break;
			case 9:
				mesString = " set. ";
				break;
			case 10:
				mesString = " out. ";
				break;
			case 11:
				mesString = " nov. ";
				break;
			case 12:
				mesString = " dez. ";
				break;
		}
		String url = ". Disponível em: " + this.getUrl() + ". Acesso em: " + dia + mesString + ano + ".";
		String formatoFinal = titulo + subtitulo + localPublicacao + editora + dataInicio + issn + doi + url;
		this.setFormatoFinal(formatoFinal);
	}

}
