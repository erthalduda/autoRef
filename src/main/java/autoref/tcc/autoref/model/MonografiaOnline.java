package autoref.tcc.autoref.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;

@Entity
public class MonografiaOnline extends Monografia {

	private String url;

	private LocalDate dataAcesso;

	public MonografiaOnline(Integer id, String titulo, String formatoFinal, String citacaoIndireta,
			String citacaoDireta, String tipo, List<Colecao> colecoes, Usuario usuario, ArrayList<String> autor,
			String subtitulo, String anoPublicacao, String cidade, String anoEntrega, String edicao, String editora,
			String url, LocalDate dataAcesso) {
		super();
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

	public LocalDate getDataAcesso() {
		return this.dataAcesso;
	}

	public void setDataAcesso(LocalDate dataAcesso) {
		this.dataAcesso = dataAcesso;
	}

	@Override
	public void formata() {

		String autores = this.formataAutores();
		String titulo = this.getTitulo();
		String subtitulo = ". ";
		if ((this.getSubtitulo() != null) && (!this.getSubtitulo().equals(""))) {
			subtitulo = ": " + this.getSubtitulo() + ". ";
		}
		String edicao = "";
		if ((this.getEdicao() != null) && (!this.getEdicao().equals(""))) {
			edicao = this.getEdicao() + ". ed. ";
		}
		String local = this.getCidade() + ": " + this.getEditora() + ", " + this.getAnoPublicacao() + ". ";
		String data = this.formataData(this.getDataAcesso());
		String url = "Disponível em: " + this.getUrl() + ". Acesso em: " + data + ".";
		String formatoFinal = autores + titulo + subtitulo + edicao + local + url;
		this.formatoFinal = formatoFinal;

	}

	@Override
	public String toString() {
		return super.toString() + "MonografiaOnline [url=" + url + ", dataAcesso=" + dataAcesso + "]";
	}

}
