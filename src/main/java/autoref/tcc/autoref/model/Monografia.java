package autoref.tcc.autoref.model;

import java.util.ArrayList;
import java.util.Collections;

import javax.persistence.Basic;
import javax.persistence.Entity;

@Entity
public class Monografia extends Referencia {

	@Basic
	protected ArrayList<String> autor;

	protected String subtitulo;

	protected String anoPublicacao;

	protected String cidade;

	protected String curso;

	protected String anoEntrega;

	protected String quantidadePaginas;

	protected String edicao;

	protected String editora;

	public Monografia() {

	}

	public Monografia(Integer id, String titulo, Usuario usuario, ArrayList<String> autor, String subtitulo,
			String anoPublicacao,
			String cidade, String curso, String anoEntrega, String quantidadePaginas, String edicao,
			String editora) {
		super(id, titulo, usuario);
		this.autor = autor;
		this.subtitulo = subtitulo;
		this.anoPublicacao = anoPublicacao;
		this.cidade = cidade;
		this.curso = curso;
		this.anoEntrega = anoEntrega;
		this.quantidadePaginas = quantidadePaginas;
		this.edicao = edicao;
		this.editora = editora;
	}

	public ArrayList<String> getAutor() {
		return this.autor;
	}

	public void setAutor(ArrayList<String> autor) {
		this.autor = autor;
	}

	public String getSubtitulo() {
		return this.subtitulo;
	}

	public void setSubtitulo(String subtitulo) {
		this.subtitulo = subtitulo;
	}

	public String getAnoPublicacao() {
		return this.anoPublicacao;
	}

	public void setAnoPublicacao(String anoPublicacao) {
		this.anoPublicacao = anoPublicacao;
	}

	public String getCidade() {
		return this.cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getCurso() {
		return this.curso;
	}

	public void setCurso(String curso) {
		this.curso = curso;
	}

	public String getAnoEntrega() {
		return this.anoEntrega;
	}

	public void setAnoEntrega(String anoEntrega) {
		this.anoEntrega = anoEntrega;
	}

	public String getQuantidadePaginas() {
		return this.quantidadePaginas;
	}

	public void setQuantidadePaginas(String quantidadePaginas) {
		this.quantidadePaginas = quantidadePaginas;
	}

	public String getEdicao() {
		return this.edicao;
	}

	public void setEdicao(String edicao) {
		this.edicao = edicao;
	}

	public String getEditora() {
		return this.editora;
	}

	public void setEditora(String editora) {
		this.editora = editora;
	}

	public String formataAutores() {
		String autores = "";
		Collections.sort(autor);

		if (this.autor.size() > 3) {
			final String autorPrincipal = autor.get(0);
			String sobrenome = autorPrincipal.substring(autorPrincipal.lastIndexOf(" ") + 1).toUpperCase();
			String nome = autorPrincipal.substring(0, autorPrincipal.lastIndexOf(" "));
			autores = sobrenome + ", " + nome + " et al.";

		} else {
			String autor01 = autor.get(0);
			String sobrenomeAutor01 = autor01.substring(autor01.lastIndexOf(" ") + 1).toUpperCase();
			String nomeAutor01 = autor01.substring(0, autor01.lastIndexOf(" "));
			autor01 = sobrenomeAutor01 + ", " + nomeAutor01;

			String autor02 = autor.get(1);
			String sobrenomeAutor02 = autor02.substring(autor02.lastIndexOf(" ") + 1).toUpperCase();
			String nomeAutor02 = autor02.substring(0, autor02.lastIndexOf(" "));
			autor02 = sobrenomeAutor02 + ", " + nomeAutor02;

			String autor03 = autor.get(2);
			String sobrenomeAutor03 = autor03.substring(autor03.lastIndexOf(" ") + 1).toUpperCase();
			String nomeAutor03 = autor03.substring(0, autor03.lastIndexOf(" "));
			autor03 = sobrenomeAutor03 + ", " + nomeAutor03;

			autores = autor01 + "; " + autor02 + "; " + autor03 + ". ";
		}

		return autores;
	}

	public void formata() {
		String autores = this.formataAutores();
		String titulo = this.getTitulo();
		String subtitulo = this.getSubtitulo() + ". ";
		String edicao = this.getEdicao() + ". ed. ";
		String local = this.getCidade() + ": " + this.getEditora() + ", " + this.getAnoPublicacao() + ". ";
		String paginas = this.getQuantidadePaginas() + "p.";
		String formatoFinal = autores + titulo + subtitulo + edicao + local + paginas;
		this.formatoFinal = formatoFinal;
	}

}
