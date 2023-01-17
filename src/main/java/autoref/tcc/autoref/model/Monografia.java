package autoref.tcc.autoref.model;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import javax.persistence.Entity;

@Entity
public class Monografia extends Referencia {

	protected List<String> autor;

	protected String subtitulo;

	protected String anoPublicacao;

	protected String cidade;

	protected String instituicao;

	protected String curso;

	protected String anoEntrega;

	protected String quantidadePaginas;

	protected String edicao;

	protected String editora;

	public Monografia() {

	}

	public Monografia(Integer id, String titulo, Usuario usuario, List<String> autor, String subtitulo,
			String anoPublicacao,
			String cidade,
			String instituicao, String curso, String anoEntrega, String quantidadePaginas, String edicao,
			String editora) {
		super(id, titulo, usuario);
		this.autor = autor;
		this.subtitulo = subtitulo;
		this.anoPublicacao = anoPublicacao;
		this.cidade = cidade;
		this.instituicao = instituicao;
		this.curso = curso;
		this.anoEntrega = anoEntrega;
		this.quantidadePaginas = quantidadePaginas;
		this.edicao = edicao;
		this.editora = editora;
	}

	public List<String> getAutor() {
		return this.autor;
	}

	public void setAutor(List<String> autor) {
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

	public String getInstituicao() {
		return this.instituicao;
	}

	public void setInstituicao(String instituicao) {
		this.instituicao = instituicao;
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

	@Override
	public String toString() {
		String autores = "";
		Collections.sort(autor);
		
		if (this.autor.size() > 3) {
			final String autorPrincipal = autor.stream().findFirst().orElse(autores);
			String[] partes = autorPrincipal.split(" ");
			String sobrenome = partes[1].toUpperCase();
			String nome = partes[0];
			autores = sobrenome + ", " + nome + "<i>et al</i>";

		} else {
			final String autor01 = autor.get(0);
			String[] partesAutor01 = autor01.split(" ");
			String sobrenomeAutor01 = partesAutor01[1].toUpperCase();
			String nomeAutor01 = partesAutor01[0];

			final String autor02 = autor.get(1);
			String[] partesAutor02 = autor02.split(" ");
			String sobrenomeAutor02 = partesAutor02[1].toUpperCase();
			String nomeAutor02 = partesAutor02[0];

			final String autor03 = autor.get(2);
			String[] partesAutor03 = autor03.split(" ");
			String sobrenomeAutor03 = partesAutor03[1].toUpperCase();
			String nomeAutor03 = partesAutor03[0];

			autores = sobrenomeAutor01 + ", " + nomeAutor01 + "; " + sobrenomeAutor02 + ", " + nomeAutor02 + "; "
					+ sobrenomeAutor03 + ", " + nomeAutor03;
		}

		return autores;
	}

}
