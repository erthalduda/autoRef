package autoref.tcc.autoref.model;
import javax.persistence.Entity;

@Entity
public class ColecaoPublicacaoPeriodica extends Referencia {

	protected String subtituloPublicacao;

	protected String localPublicacao;

	protected String editora;

	protected String dataInicio;

	protected String dataFim;

	protected String issn;

	public ColecaoPublicacaoPeriodica() {
	}

	public ColecaoPublicacaoPeriodica(Integer id, String titulo, String subtituloPublicacao, String localPublicacao,
			String editora, String dataInicio, String dataFim, String issn) {
		super(id, titulo);
		this.subtituloPublicacao = subtituloPublicacao;
		this.localPublicacao = localPublicacao;
		this.editora = editora;
		this.dataInicio = dataInicio;
		this.dataFim = dataFim;
		this.issn = issn;
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

}
