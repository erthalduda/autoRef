package autoref.tcc.autoref.model;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.persistence.Basic;
import javax.persistence.Entity;

@Entity
public class Monografia extends Referencia {

	@Basic
	protected ArrayList<String> autor;

	protected String subtitulo;

	protected String anoPublicacao;

	protected String cidade;

	protected String anoEntrega;

	protected String quantidadePaginas;

	protected String edicao;

	protected String editora;

	public Monografia(Integer id, String titulo, String formatoFinal, String citacaoIndireta, String citacaoDireta,
			String tipo, List<Colecao> colecoes, Usuario usuario, ArrayList<String> autor, String subtitulo,
			String anoPublicacao, String cidade, String anoEntrega, String quantidadePaginas,
			String edicao, String editora) {
		super(id, titulo, formatoFinal, citacaoIndireta, citacaoDireta, tipo, colecoes, usuario);
		this.autor = autor;
		this.subtitulo = subtitulo;
		this.anoPublicacao = anoPublicacao;
		this.cidade = cidade;
		this.anoEntrega = anoEntrega;
		this.quantidadePaginas = quantidadePaginas;
		this.edicao = edicao;
		this.editora = editora;
	}

	public Monografia() {

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
	public String formataAutores() {
		String autores = "";
		Collections.sort(autor);

		if (this.autor.size() > 3) {
			final String autorPrincipal = autor.get(0);
			String sobrenome = autorPrincipal.substring(autorPrincipal.lastIndexOf(" ") + 1).toUpperCase();
			String nome = autorPrincipal.substring(0, autorPrincipal.lastIndexOf(" "));
			autores = sobrenome + ", " + nome + " et al";

		} else {
			String autor01 = autor.get(0);
			String autor02 = "";
			String autor03 = "";
			String sobrenomeAutor01 = autor01.substring(autor01.lastIndexOf(" ") + 1).toUpperCase();
			String nomeAutor01 = autor01.substring(0, autor01.lastIndexOf(" "));
			autor01 = sobrenomeAutor01 + ", " + nomeAutor01;
			autores = autor01;
			if (autor.size() > 1) {
				autor02 = autor.get(1);
				String sobrenomeAutor02 = autor02.substring(autor02.lastIndexOf(" ") + 1).toUpperCase();
				String nomeAutor02 = autor02.substring(0, autor02.lastIndexOf(" "));
				autor02 = sobrenomeAutor02 + ", " + nomeAutor02;
				autores = autor01 + "; " + autor02;
			}
			if (autor.size() > 2) {
				autor03 = autor.get(2);
				String sobrenomeAutor03 = autor03.substring(autor03.lastIndexOf(" ") + 1).toUpperCase();
				String nomeAutor03 = autor03.substring(0, autor03.lastIndexOf(" "));
				autor03 = sobrenomeAutor03 + ", " + nomeAutor03;
				autores = autor01 + "; " + autor02 + "; " + autor03;
			}
		}

		return autores.concat(". ");
	}

	@Override
	public String formataCitacoes() {
		String sobrenome = "";
		String citacaoDiretaAutorNoTexto = "";
		String citacaoDireta = "";
		String citacaoIndiretaAutorNoTexto = "";
		String citacaoIndireta = "";
		Collections.sort(autor);
		if (this.autor.size() > 3) {
			final String autorPrincipal = autor.get(0);
			sobrenome = autorPrincipal.substring(autorPrincipal.lastIndexOf(" ") + 1);
			citacaoIndireta = "(" + sobrenome.toUpperCase().concat(" et al, ").concat(this.getAnoPublicacao()) + ")";
			citacaoDireta = "("
					+ sobrenome.toUpperCase().concat(" et al, ").concat(this.getAnoPublicacao()).concat(", p. X.)");
			citacaoIndiretaAutorNoTexto = sobrenome + " (" + this.getAnoPublicacao() + " et al)";
			citacaoDiretaAutorNoTexto = sobrenome + " (" + this.getAnoPublicacao() + " et al, p. X.)";
		} else {
			if (this.autor.size() == 3) {
				String autor01 = autor.get(0);
				String sobrenomeAutor01 = autor01.substring(autor01.lastIndexOf(" ") + 1);

				String autor02 = autor.get(1);
				String sobrenomeAutor02 = autor02.substring(autor02.lastIndexOf(" ") + 1);

				String autor03 = autor.get(2);
				String sobrenomeAutor03 = autor03.substring(autor03.lastIndexOf(" ") + 1);

				sobrenome = sobrenomeAutor01 + "; " + sobrenomeAutor02 + "; " + sobrenomeAutor03;
				citacaoIndireta = "(" + sobrenome.toUpperCase().concat(", ").concat(this.getAnoPublicacao()) + ")";
				citacaoDireta = "("
						+ sobrenome.toUpperCase().concat(", ").concat(this.getAnoPublicacao()).concat(", p. X.)");
				sobrenome = sobrenomeAutor01 + ", " + sobrenomeAutor02 + " e " + sobrenomeAutor03;
				citacaoIndiretaAutorNoTexto = sobrenome + " (" + this.getAnoPublicacao() + ")";
				citacaoDiretaAutorNoTexto = sobrenome + " (" + this.getAnoPublicacao() + ", p. X.)";

			}
			if (this.autor.size() == 2) {
				String autor01 = autor.get(0);
				String sobrenomeAutor01 = autor01.substring(autor01.lastIndexOf(" ") + 1);

				String autor02 = autor.get(1);
				String sobrenomeAutor02 = autor02.substring(autor02.lastIndexOf(" ") + 1);

				sobrenome = sobrenomeAutor01 + "; " + sobrenomeAutor02;
				citacaoIndireta = "(" + sobrenome.toUpperCase().concat(", ").concat(this.getAnoPublicacao()) + ")";
				citacaoDireta = "("
						+ sobrenome.toUpperCase().concat(", ").concat(this.getAnoPublicacao()).concat(", p. X.)");
				sobrenome = sobrenomeAutor01 + " e " + sobrenomeAutor02;
				citacaoIndiretaAutorNoTexto = sobrenome + " (" + this.getAnoPublicacao() + ")";
				citacaoDiretaAutorNoTexto = sobrenome + " (" + this.getAnoPublicacao() + ", p. X.)";
			}
			if (this.autor.size() == 1) {
				String autor01 = autor.get(0);
				String sobrenomeAutor01 = autor01.substring(autor01.lastIndexOf(" ") + 1);
				sobrenome = sobrenomeAutor01;
				citacaoIndireta = "(" + sobrenome.toUpperCase().concat(", ").concat(this.getAnoPublicacao()) + ")";
				citacaoDireta = "("
						+ sobrenome.toUpperCase().concat(", ").concat(this.getAnoPublicacao()).concat(", p. X.)");
				sobrenome = sobrenomeAutor01;
				citacaoIndiretaAutorNoTexto = sobrenome + " (" + this.getAnoPublicacao() + ")";
				citacaoDiretaAutorNoTexto = sobrenome + " (" + this.getAnoPublicacao() + ", p. X.)";
			}
		}

		String citacoes = citacaoIndireta + "\n" + citacaoIndiretaAutorNoTexto + "\n" + citacaoDireta + "\n"
				+ citacaoDiretaAutorNoTexto;

		this.setCitacaoDireta(citacaoDireta.concat(" ").concat(citacaoDiretaAutorNoTexto));
		this.setCitacaoIndireta(citacaoIndireta.concat(" ").concat(citacaoIndiretaAutorNoTexto));
		return citacoes;
	}

	@Override
	public void formata() {
		String autores = this.formataAutores();
		String titulo = this.getTitulo();
		String subtitulo = ". ";
		if (this.getSubtitulo() != null) {
			subtitulo = ": " + this.getSubtitulo() + ". ";
		}
		String edicao = "";
		if (this.getEdicao() != null) {
			edicao = this.getEdicao() + ". ed. ";
		}
		String local = this.getCidade() + ": " + this.getEditora() + ", " + this.getAnoPublicacao() + ". ";
		String paginas = this.getQuantidadePaginas() + "p.";
		String formatoFinal = autores + titulo + subtitulo + edicao + local + paginas;
		this.formatoFinal = formatoFinal;
	}

	@Override
	public String toString() {
		return super.toString() + "Monografia [autor=" + autor + ", subtitulo=" + subtitulo + ", anoPublicacao="
				+ anoPublicacao
				+ ", cidade=" + cidade + ", anoEntrega=" + anoEntrega + ", quantidadePaginas=" + quantidadePaginas
				+ ", edicao=" + edicao + ", editora=" + editora + "]";
	}

}
