package autoref.tcc.autoref.model;
import javax.persistence.Entity;

@Entity
public class ParteColecaoPublicacaoPeriodica extends ColecaoPublicacaoPeriodica {

	private String periodoConsultado;

	public ParteColecaoPublicacaoPeriodica() {
	}

	public ParteColecaoPublicacaoPeriodica(Integer id, String titulo, String subtituloPublicacao,
			String localPublicacao, String editora, String dataInicio, String dataFim, String issn,
			String periodoConsultado) {
		super(id, titulo, subtituloPublicacao, localPublicacao, editora, dataInicio, dataFim, issn);
		this.periodoConsultado = periodoConsultado;
	}

	public String getPeriodoConsultado() {
		return this.periodoConsultado;
	}

	public void setPeriodoConsultado(String periodoConsultado) {
		this.periodoConsultado = periodoConsultado;
	}

}
