package autoref.tcc.autoref.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;

@Entity
public class MonografiaMeioEletronico extends Monografia {

	private String descricaoDoSuporte;

	public MonografiaMeioEletronico(Integer id, String titulo, String formatoFinal, String citacaoIndireta,
			String citacaoDireta, String tipo, List<Colecao> colecoes, Usuario usuario, ArrayList<String> autor,
			String subtitulo, String anoPublicacao, String cidade, String anoEntrega,
			String quantidadePaginas, String edicao, String editora, String descricaoDoSuporte) {
		super(id, titulo, formatoFinal, citacaoIndireta, citacaoDireta, tipo, colecoes, usuario, autor, subtitulo,
				anoPublicacao, cidade, anoEntrega, quantidadePaginas, edicao, editora);
		this.descricaoDoSuporte = descricaoDoSuporte;
	}

	public MonografiaMeioEletronico() {

	}

	public String getDescricaoDoSuporte() {
		return this.descricaoDoSuporte;
	}

	public void setDescricaoDoSuporte(String descricaoDoSuporte) {
		this.descricaoDoSuporte = descricaoDoSuporte;
	}

	@Override
	public void formata() {
		String autores = this.formataAutores();
		String titulo = this.getTitulo().toUpperCase();
		String subtitulo = "";
		if (!this.getSubtitulo().equals(" ")) {
			subtitulo = ": " + this.getSubtitulo() + ". ";
		} else {
			subtitulo = ". ";
		}
		String edicao = this.getEdicao() + ". ed. ";
		String local = this.getCidade() + ": " + this.getEditora() + ", " + this.getAnoPublicacao() + ". ";
		String paginas = this.getQuantidadePaginas() + "p.";
		String descricaoSuporte = this.getDescricaoDoSuporte() + ".";
		String formatoFinal = autores + titulo + subtitulo + edicao + local + paginas + descricaoSuporte;
		this.formatoFinal = formatoFinal;
	}

	@Override
	public String toString() {
		return super.toString() + "MonografiaMeioEletronico [descricaoDoSuporte=" + descricaoDoSuporte + "]";
	}

}
