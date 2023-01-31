package autoref.tcc.autoref.model;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Calendar;
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

	private Date dataPublicacao;

	public Artigo(Integer id, String titulo, String formatoFinal, String citacaoIndireta, String citacaoDireta,
			String tipo, List<Colecao> colecoes, Usuario usuario, ArrayList<String> autor, String subtituloArtigo,
			String tituloPeriodico, String subtituloPeriodico, String localPublicacao, String numeracaoAno,
			String numeracaoVolume, String numero, String edicao, String tomo, String paginaInicial, String paginaFinal,
			Date dataPublicacao) {
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

	public Date getDataPublicacao() {
		return this.dataPublicacao;
	}

	public void setDataPublicacao(Date dataPublicacao) {
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

		Calendar calendario = Calendar.getInstance();
		calendario.setTime(this.getDataPublicacao());
		int ano = calendario.get(Calendar.YEAR);
		String anoString = String.valueOf(ano);

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
				citacaoIndireta = "(" + sobrenome.toUpperCase().concat(", ").concat(anoString) + ")";
				citacaoDireta = "("
						+ sobrenome.toUpperCase().concat(", ").concat(anoString).concat(", p. X.)");
				sobrenome = sobrenomeAutor01 + ", " + sobrenomeAutor02 + " e " + sobrenomeAutor03;
				citacaoIndiretaAutorNoTexto = sobrenome + " (" + anoString + ")";
				citacaoDiretaAutorNoTexto = sobrenome + " (" + anoString + ", p. X.)";

			}
			if (this.autor.size() == 2) {
				String autor01 = autor.get(0);
				String sobrenomeAutor01 = autor01.substring(autor01.lastIndexOf(" ") + 1);

				String autor02 = autor.get(1);
				String sobrenomeAutor02 = autor02.substring(autor02.lastIndexOf(" ") + 1);

				sobrenome = sobrenomeAutor01 + "; " + sobrenomeAutor02;
				citacaoIndireta = "(" + sobrenome.toUpperCase().concat(", ").concat(anoString) + ")";
				citacaoDireta = "("
						+ sobrenome.toUpperCase().concat(", ").concat(anoString).concat(", p. X.)");
				sobrenome = sobrenomeAutor01 + " e " + sobrenomeAutor02;
				citacaoIndiretaAutorNoTexto = sobrenome + " (" + anoString + ")";
				citacaoDiretaAutorNoTexto = sobrenome + " (" + anoString + ", p. X.)";
			}
			if (this.autor.size() == 1) {
				String autor01 = autor.get(0);
				String sobrenomeAutor01 = autor01.substring(autor01.lastIndexOf(" ") + 1);
				sobrenome = sobrenomeAutor01;
				citacaoIndireta = "(" + sobrenome.toUpperCase().concat(", ").concat(anoString) + ")";
				citacaoDireta = "("
						+ sobrenome.toUpperCase().concat(", ").concat(anoString).concat(", p. X.)");
				sobrenome = sobrenomeAutor01;
				citacaoIndiretaAutorNoTexto = sobrenome + " (" + anoString + ")";
				citacaoDiretaAutorNoTexto = sobrenome + " (" + anoString + ", p. X.)";
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
		String autor = this.formataAutores();
		String titulo = this.getTitulo();
		String subtitulo = ". ";
		if (this.getSubtituloArtigo() != null) {
			subtitulo = ": " + this.getSubtituloArtigo() + ". ";
		}
		String tituloPeriodico = this.getTituloPeriodico();
		String subtituloPeriodico = ". ";
		if (this.getSubtituloPeriodico() != null) {
			subtituloPeriodico = ": " + this.getSubtituloPeriodico() + ". ";
		}
		String local = this.getLocalPublicacao();
		String numeracaoAno = "";
		if (this.getNumeracaoAno() != null) {
			numeracaoAno = ", ano " + this.getNumeracaoAno();
		}
		String numeracaoVolume = "";
		if (this.getNumeracaoVolume() != null) {
			numeracaoVolume = ", v. " + this.getNumeracaoVolume();
		}
		String numero = "";
		if (this.getNumero() != null) {
			numero = ", n. " + this.getNumero();
		}
		String edicao = "";
		if (this.getEdicao() != null) {
			edicao = ", " + this.getEdicao() + ". ed";
		}
		String tomo = "";
		if (this.getTomo() != null) {
			tomo = ", t. " + this.getTomo();
		}
		String pags = ", p. " + this.getPaginaInicial() + "-" + this.getPaginaFinal();
		String data = ", " + this.formataData(this.getDataPublicacao());
		String formatoFinal = autor + titulo + subtitulo + tituloPeriodico + subtituloPeriodico + local + numeracaoAno
				+ numeracaoVolume + numero + edicao + tomo + pags + data;
		this.setFormatoFinal(formatoFinal);
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
