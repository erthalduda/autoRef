package autoref.tcc.autoref.model;

import javax.persistence.Entity;

@Entity
public class ColecaoPublicacaoPeriodicaEletronico extends ColecaoPublicacaoPeriodica {

	private String doi;

	private String descricaoDoSuporte;

	public ColecaoPublicacaoPeriodicaEletronico() {
	}

	public ColecaoPublicacaoPeriodicaEletronico(Integer id, String titulo, Usuario usuario, String subtituloPublicacao,
			String localPublicacao, String editora, String dataInicio, String dataFim, String issn, String doi,
			String descricaoDoSuporte) {
		super(id, titulo, usuario, subtituloPublicacao, localPublicacao, editora, dataInicio, dataFim, issn);
		this.doi = doi;
		this.descricaoDoSuporte = descricaoDoSuporte;
	}

	public String getDoi() {
		return this.doi;
	}

	public void setDoi(String doi) {
		this.doi = doi;
	}

	public String getDescricaoDoSuporte() {
		return this.descricaoDoSuporte;
	}

	public void setDescricaoDoSuporte(String descricaoDoSuporte) {
		this.descricaoDoSuporte = descricaoDoSuporte;
	}

}
