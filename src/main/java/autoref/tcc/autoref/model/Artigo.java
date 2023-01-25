package autoref.tcc.autoref.model;

import java.util.ArrayList;
import java.util.Collections;

import javax.persistence.Basic;
import javax.persistence.Entity;

@Entity
public class Artigo extends ColecaoPublicacaoPeriodica {

	@Basic
	private ArrayList<String> autor;

	private String tituloArtigo;

	private String subtituloArtigo;

	private String numeracaoAno;

	private String numeracaoVolume;

	private String numero;

	private String edicao;

	private String tomo;

	private String paginaInicial;

	private String paginaFinal;

	private String dataPublicacao;

	public Artigo(Integer id, String titulo, Usuario usuario, String subtituloPublicacao, String localPublicacao,
			String editora, String dataInicio, String dataFim, String issn, ArrayList<String> autor,
			String tituloArtigo, String subtituloArtigo, String numeracaoAno, String numeracaoVolume, String numero,
			String edicao, String tomo, String paginaInicial, String paginaFinal, String dataPublicacao) {
		super(id, titulo, usuario, subtituloPublicacao, localPublicacao, editora, dataInicio, dataFim, issn);
		this.autor = autor;
		this.tituloArtigo = tituloArtigo;
		this.subtituloArtigo = subtituloArtigo;
		this.numeracaoAno = numeracaoAno;
		this.numeracaoVolume = numeracaoVolume;
		this.numero = numero;
		this.edicao = edicao;
		this.tomo = tomo;
		this.paginaInicial = paginaInicial;
		this.paginaFinal = paginaFinal;
		this.dataPublicacao = dataPublicacao;
	}

	public Artigo() {
	}

	public ArrayList<String> getAutor() {
		return this.autor;
	}

	public void setAutor(ArrayList<String> autor) {
		this.autor = autor;
	}

	public String getTituloArtigo() {
		return this.tituloArtigo;
	}

	public void setTituloArtigo(String tituloArtigo) {
		this.tituloArtigo = tituloArtigo;
	}

	public String getSubtituloArtigo() {
		return this.subtituloArtigo;
	}

	public void setSubtituloArtigo(String subtituloArtigo) {
		this.subtituloArtigo = subtituloArtigo;
	}

	public String getNumeracaoAno() {
		return this.numeracaoAno;
	}

	public void setNumeracaoAno(String numeracaoAno) {
		this.numeracaoAno = numeracaoAno;
	}

	public String getNumeracaoVolume() {
		return this.numeracaoVolume;
	}

	public void setNumeracaoVolume(String numeracaoVolume) {
		this.numeracaoVolume = numeracaoVolume;
	}

	public String getNumero() {
		return this.numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getEdicao() {
		return this.edicao;
	}

	public void setEdicao(String edicao) {
		this.edicao = edicao;
	}

	public String getTomo() {
		return this.tomo;
	}

	public void setTomo(String tomo) {
		this.tomo = tomo;
	}

	public String getPaginaInicial() {
		return this.paginaInicial;
	}

	public void setPaginaInicial(String paginaInicial) {
		this.paginaInicial = paginaInicial;
	}

	public String getPaginaFinal() {
		return this.paginaFinal;
	}

	public void setPaginaFinal(String paginaFinal) {
		this.paginaFinal = paginaFinal;
	}

	public String getDataPublicacao() {
		return this.dataPublicacao;
	}

	public void setDataPublicacao(String dataPublicacao) {
		this.dataPublicacao = dataPublicacao;
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
			String sobrenomeAutor03 = autor03.substring(autor02.lastIndexOf(" ") + 1).toUpperCase();
			String nomeAutor03 = autor03.substring(0, autor03.lastIndexOf(" "));
			autor03 = sobrenomeAutor03 + ", " + nomeAutor03;

			autores = autor01 + "; " + autor02 + "; " + autor03 + ".";
		}

		return autores;
	}

}
