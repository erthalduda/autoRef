package autoref.tcc.autoref.model;

import java.sql.Date;
import java.util.List;

import javax.persistence.Entity;

@Entity
public class ParteColecaoPublicacaoPeriodica extends ColecaoPublicacaoPeriodica {

	private Date periodoConsultado;

	public ParteColecaoPublicacaoPeriodica(Integer id, String titulo, String formatoFinal, String citacaoIndireta,
			String citacaoDireta, String tipo, List<Colecao> colecoes, Usuario usuario, String subtituloPublicacao,
			String localPublicacao, String editora, String dataInicio, String dataFim, String issn,
			Date periodoConsultado) {
		super(id, titulo, formatoFinal, citacaoIndireta, citacaoDireta, tipo, colecoes, usuario, subtituloPublicacao,
				localPublicacao, editora, dataInicio, dataFim, issn);
		this.periodoConsultado = periodoConsultado;
	}

	public ParteColecaoPublicacaoPeriodica() {
	}

	public Date getPeriodoConsultado() {
		return this.periodoConsultado;
	}

	public void setPeriodoConsultado(Date periodoConsultado) {
		this.periodoConsultado = periodoConsultado;
	}

	@Override
	public String toString() {
		return super.toString() + "ParteColecaoPublicacaoPeriodica [periodoConsultado=" + periodoConsultado + "]";
	}

}
