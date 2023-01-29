package autoref.tcc.autoref.model;

import java.util.List;

import javax.persistence.Entity;

@Entity
public class ColecaoPublicacaoPeriodica extends Referencia {

	protected String subtituloPublicacao;

	protected String localPublicacao;

	protected String editora;

	protected String dataInicio;

	protected String dataFim;

	protected String issn;

	public ColecaoPublicacaoPeriodica(Integer id, String titulo, String formatoFinal, String citacaoIndireta,
			String citacaoDireta, String tipo, List<Colecao> colecoes, Usuario usuario, String subtituloPublicacao,
			String localPublicacao, String editora, String dataInicio, String dataFim, String issn) {
		super(id, titulo, formatoFinal, citacaoIndireta, citacaoDireta, tipo, colecoes, usuario);
		this.subtituloPublicacao = subtituloPublicacao;
		this.localPublicacao = localPublicacao;
		this.editora = editora;
		this.dataInicio = dataInicio;
		this.dataFim = dataFim;
		this.issn = issn;
	}

	public ColecaoPublicacaoPeriodica() {
	}

	public String getSubtituloPublicacao() {
		return this.subtituloPublicacao;
	}

	public void setSubtituloPublicacao(String subtituloPublicacao) {
		this.subtituloPublicacao = subtituloPublicacao;
	}

	public String getLocalPublicacao() {
		return this.localPublicacao;
	}

	public void setLocalPublicacao(String localPublicacao) {
		this.localPublicacao = localPublicacao;
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

	@Override
	public String formataCitacoes() {
		String titulo = this.getTitulo();
		String citacaoDiretaAutorNoTexto = "";
		String citacaoDireta = "";
		String citacaoIndiretaAutorNoTexto = "";
		String citacaoIndireta = "";
		citacaoIndireta = "(" + titulo.toUpperCase().concat(", ") + this.getDataInicio() + ")";
		citacaoDireta = "("
				+ titulo.toUpperCase().concat(", ") + this.getDataInicio() + (", p. X.)");
		citacaoIndiretaAutorNoTexto = titulo + " (" + this.getDataInicio() + ")";
		citacaoDiretaAutorNoTexto = titulo + " (" + this.getDataInicio() + ", p. X.)";

		String citacoes = citacaoIndireta + "\n" + citacaoIndiretaAutorNoTexto + "\n" + citacaoDireta + "\n"
				+ citacaoDiretaAutorNoTexto;

		this.setCitacaoDireta(citacaoDireta.concat(" ").concat(citacaoDiretaAutorNoTexto));
		this.setCitacaoIndireta(citacaoIndireta.concat(" ").concat(citacaoIndiretaAutorNoTexto));
		return citacoes;
	}

	@Override
	public void formata() {
		String titulo = this.getTitulo().toUpperCase();
		String subtitulo = "";
		if (!this.getSubtituloPublicacao().equals(" ")) {
			subtitulo = ": " + this.getSubtituloPublicacao() + ". ";
		}else{
			subtitulo = ". ";
		}
		String localPublicacao = this.getLocalPublicacao() + ": ";
		String editora = this.getEditora() + ", ";
		String dataInicioEFim = this.getDataInicio() + "-" + this.getDataFim() + ". ";
		String issn = "ISSN " + this.getIssn();
		String formatoFinal = titulo + subtitulo + localPublicacao + editora + dataInicioEFim + issn;
		this.setFormatoFinal(formatoFinal);
	}
}
