package autoref.tcc.autoref.model;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.persistence.Basic;
import javax.persistence.Entity;

@Entity
public class Artigo extends Referencia {

	@Basic
	private ArrayList<String> autor;

	private String subtituloArtigo;

	private String tituloPeriodico;

	private String subtituloPeriodico;

	private String localPublicacao;

	private String numeracaoAno;

	private String numeracaoVolume;

	private String numero;

	private String edicao;

	private String tomo;

	private String paginaInicial;

	private String paginaFinal;

	private String dataPublicacao;

	public Artigo(Integer id, String titulo, String formatoFinal, String citacaoIndireta, String citacaoDireta,
			String tipo, List<Colecao> colecoes, Usuario usuario, ArrayList<String> autor, String subtituloArtigo,
			String tituloPeriodico, String subtituloPeriodico, String localPublicacao, String numeracaoAno,
			String numeracaoVolume, String numero, String edicao, String tomo, String paginaInicial, String paginaFinal,
			String dataPublicacao) {
		super(id, titulo, formatoFinal, citacaoIndireta, citacaoDireta, tipo, colecoes, usuario);
		this.autor = autor;
		this.subtituloArtigo = subtituloArtigo;
		this.tituloPeriodico = tituloPeriodico;
		this.subtituloPeriodico = subtituloPeriodico;
		this.localPublicacao = localPublicacao;
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

	public String getSubtituloArtigo() {
		return this.subtituloArtigo;
	}

	public void setSubtituloArtigo(String subtituloArtigo) {
		this.subtituloArtigo = subtituloArtigo;
	}

	public String getTituloPeriodico() {
		return this.tituloPeriodico;
	}

	public void setTituloPeriodico(String tituloPeriodico) {
		this.tituloPeriodico = tituloPeriodico;
	}

	public String getSubtituloPeriodico() {
		return this.subtituloPeriodico;
	}

	public void setSubtituloPeriodico(String subtituloPeriodico) {
		this.subtituloPeriodico = subtituloPeriodico;
	}

	public String getLocalPublicacao() {
		return this.localPublicacao;
	}

	public void setLocalPublicacao(String localPublicacao) {
		this.localPublicacao = localPublicacao;
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

	@Override
	public String formataAutores() {
		String autores = "";
		Collections.sort(autor);

		if (this.autor.size() > 3) {
			final String autorPrincipal = autor.get(0);
			String sobrenome = autorPrincipal.substring(autorPrincipal.lastIndexOf(" ") + 1).toUpperCase();
			String nome = autorPrincipal.substring(0, autorPrincipal.lastIndexOf(" "));
			autores = sobrenome + ", " + nome + " et al. ";

		} else {
			String autor01 = autor.get(0);
			String autor02 = "";
			String autor03 = "";
			String sobrenomeAutor01 = autor01.substring(autor01.lastIndexOf(" ") + 1).toUpperCase();
			String nomeAutor01 = autor01.substring(0, autor01.lastIndexOf(" "));
			autor01 = sobrenomeAutor01 + ", " + nomeAutor01;
			autores = autor01;
			if (!autor.get(1).isEmpty()) {
				autor02 = autor.get(1);
				String sobrenomeAutor02 = autor02.substring(autor02.lastIndexOf(" ") + 1).toUpperCase();
				String nomeAutor02 = autor02.substring(0, autor02.lastIndexOf(" "));
				autor02 = sobrenomeAutor02 + ", " + nomeAutor02;
				autores = autor01 + "; " + autor02;
			}
			if (!autor.get(2).isEmpty()) {
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
			sobrenome = autorPrincipal.substring(autorPrincipal.lastIndexOf(" ") + 1) + " et al";
		} else {
			if (this.autor.size() == 3) {
				String autor01 = autor.get(0);
				String sobrenomeAutor01 = autor01.substring(autor01.lastIndexOf(" ") + 1);

				String autor02 = autor.get(1);
				String sobrenomeAutor02 = autor02.substring(autor02.lastIndexOf(" ") + 1);

				String autor03 = autor.get(2);
				String sobrenomeAutor03 = autor03.substring(autor03.lastIndexOf(" ") + 1);

				sobrenome = sobrenomeAutor01 + "; " + sobrenomeAutor02 + "; " + sobrenomeAutor03;
				citacaoIndireta = "(" + sobrenome.toUpperCase().concat(", ").concat(this.getNumeracaoAno()) + ")";
				citacaoDireta = "("
						+ sobrenome.toUpperCase().concat(", ").concat(this.getNumeracaoAno()).concat(", p. X.)");
				sobrenome = sobrenomeAutor01 + ", " + sobrenomeAutor02 + " e " + sobrenomeAutor03;
				citacaoIndiretaAutorNoTexto = sobrenome + " (" + this.getNumeracaoAno() + ")";
				citacaoDiretaAutorNoTexto = sobrenome + " (" + this.getNumeracaoAno() + ", p. X.)";

			}
			if (this.autor.size() == 2) {
				String autor01 = autor.get(0);
				String sobrenomeAutor01 = autor01.substring(autor01.lastIndexOf(" ") + 1);

				String autor02 = autor.get(1);
				String sobrenomeAutor02 = autor02.substring(autor02.lastIndexOf(" ") + 1);

				sobrenome = sobrenomeAutor01 + "; " + sobrenomeAutor02;
				citacaoIndireta = "(" + sobrenome.toUpperCase().concat(", ").concat(this.getNumeracaoAno()) + ")";
				citacaoDireta = "("
						+ sobrenome.toUpperCase().concat(", ").concat(this.getNumeracaoAno()).concat(", p. X.)");
				sobrenome = sobrenomeAutor01 + " e " + sobrenomeAutor02;
				citacaoIndiretaAutorNoTexto = sobrenome + " (" + this.getNumeracaoAno() + ")";
				citacaoDiretaAutorNoTexto = sobrenome + " (" + this.getNumeracaoAno() + ", p. X.)";
			}
			if (this.autor.size() == 1) {
				String autor01 = autor.get(0);
				String sobrenomeAutor01 = autor01.substring(autor01.lastIndexOf(" ") + 1);
				sobrenome = sobrenomeAutor01;
				citacaoIndireta = "(" + sobrenome.toUpperCase().concat(", ").concat(this.getNumeracaoAno()) + ")";
				citacaoDireta = "("
						+ sobrenome.toUpperCase().concat(", ").concat(this.getNumeracaoAno()).concat(", p. X.)");
				sobrenome = sobrenomeAutor01;
				citacaoIndiretaAutorNoTexto = sobrenome + " (" + this.getNumeracaoAno() + ")";
				citacaoDiretaAutorNoTexto = sobrenome + " (" + this.getNumeracaoAno() + ", p. X.)";
			}
		}

		String citacoes = citacaoIndireta + "\n" + citacaoIndiretaAutorNoTexto + "\n" + citacaoDireta + "\n"
				+ citacaoDiretaAutorNoTexto;

		this.setCitacaoDireta(citacaoDireta.concat(citacaoDiretaAutorNoTexto));
		this.setCitacaoIndireta(citacaoIndireta.concat(citacaoIndiretaAutorNoTexto));
		return citacoes;
	}

	@Override
	public String toString() {
		return super.toString() + "Artigo [autor=" + autor + ", subtituloArtigo=" + subtituloArtigo
				+ ", tituloPeriodico="
				+ tituloPeriodico + ", subtituloPeriodico=" + subtituloPeriodico + ", localPublicacao="
				+ localPublicacao + ", numeracaoAno=" + numeracaoAno + ", numeracaoVolume=" + numeracaoVolume
				+ ", numero=" + numero + ", edicao=" + edicao + ", tomo=" + tomo + ", paginaInicial=" + paginaInicial
				+ ", paginaFinal=" + paginaFinal + ", dataPublicacao=" + dataPublicacao + "]";
	}
}
