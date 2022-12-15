package autoref.tcc.autoref.model;

import javax.persistence.Entity;

@Entity
public class Monografia extends Referencia {

	protected String autor;

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

	public Monografia(Integer id, String titulo, Usuario usuario, String autor, String subtitulo, String anoPublicacao,
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

	public String getAutor() {
		return this.autor;
	}

	public void setAutor(String autor) {
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

}
