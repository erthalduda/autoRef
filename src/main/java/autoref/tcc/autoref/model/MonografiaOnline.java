package autoref.tcc.autoref.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;

@Entity
public class MonografiaOnline extends Monografia {

	private String url;

	private String dataAcesso;

	public MonografiaOnline(Integer id, String titulo, String formatoFinal, String citacaoIndireta,
			String citacaoDireta, String tipo, List<Colecao> colecoes, Usuario usuario, ArrayList<String> autor,
			String subtitulo, String anoPublicacao, String cidade, String anoEntrega,
			String quantidadePaginas, String edicao, String editora, String url, String dataAcesso) {
		super(id, titulo, formatoFinal, citacaoIndireta, citacaoDireta, tipo, colecoes, usuario, autor, subtitulo,
				anoPublicacao, cidade, anoEntrega, quantidadePaginas, edicao, editora);
		this.url = url;
		this.dataAcesso = dataAcesso;
	}

	public MonografiaOnline() {

	}

	public String getUrl() {
		return this.url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getDataAcesso() {
		return this.dataAcesso;
	}

	public void setDataAcesso(String dataAcesso) {
		this.dataAcesso = dataAcesso;
	}

}
