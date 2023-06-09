package autoref.tcc.autoref.model;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.Entity;

@Entity
public class ParteMonografia extends Monografia {

	private String autorParte;

	private String tituloParte;

	private String secao;

	private int capitulo;

	private int volume;

	public ParteMonografia(Integer id, String titulo, String formatoFinal, String citacaoIndireta, String citacaoDireta,
			String tipo, List<Colecao> colecoes, Usuario usuario, ArrayList<String> autor, String subtitulo,
			String anoPublicacao, String cidade, String anoEntrega, String quantidadePaginas,
			String edicao, String editora, String autorParte, String tituloParte, String secao, int capitulo,
			int volume) {
		super(id, titulo, formatoFinal, citacaoIndireta, citacaoDireta, tipo, colecoes, usuario, autor, subtitulo,
				anoPublicacao, cidade, anoEntrega, quantidadePaginas, edicao, editora);
		this.autorParte = autorParte;
		this.tituloParte = tituloParte;
		this.secao = secao;
		this.capitulo = capitulo;
		this.volume = volume;
	}

	public ParteMonografia() {

	}

	public String getAutorParte() {
		return this.autorParte;
	}

	public void setAutorParte(String autorParte) {
		this.autorParte = autorParte;
	}

	public String getTituloParte() {
		return this.tituloParte;
	}

	public void setTituloParte(String tituloParte) {
		this.tituloParte = tituloParte;
	}

	public String getSecao() {
		return this.secao;
	}

	public void setSecao(String secao) {
		this.secao = secao;
	}

	public int getCapitulo() {
		return this.capitulo;
	}

	public void setCapitulo(int capitulo) {
		this.capitulo = capitulo;
	}

	public int getVolume() {
		return this.volume;
	}

	public void setVolume(int volume) {
		this.volume = volume;
	}

	@Override
	public String formataCitacoes() {
		String citacaoDiretaAutorNoTexto = "";
		String citacaoDireta = "";
		String citacaoIndiretaAutorNoTexto = "";
		String citacaoIndireta = "";
		String autorParte = this.getAutorParte();

		String sobrenomeAutor = autorParte.substring(autorParte.lastIndexOf(" ") + 1);
		citacaoIndireta = "(" + sobrenomeAutor.toUpperCase().concat(", ").concat(this.getAnoPublicacao()) + ")";
		citacaoDireta = "("
				+ sobrenomeAutor.toUpperCase().concat(", ").concat(this.getAnoPublicacao()).concat(", p. X.)");

		citacaoIndiretaAutorNoTexto = sobrenomeAutor + " (" + this.getAnoPublicacao() + ")";
		citacaoDiretaAutorNoTexto = sobrenomeAutor + " (" + this.getAnoPublicacao() + ", p. X.)";
		String citacoes = citacaoIndireta + "\n" + citacaoIndiretaAutorNoTexto + "\n" + citacaoDireta + "\n"
				+ citacaoDiretaAutorNoTexto;

		this.setCitacaoDireta(citacaoDireta.concat(" ").concat(citacaoDiretaAutorNoTexto));
		this.setCitacaoIndireta(citacaoIndireta.concat(" ").concat(citacaoIndiretaAutorNoTexto));
		return citacoes;
	}

	@Override
	public void formata() {

		String sobrenome = autorParte.substring(autorParte.lastIndexOf(" ") + 1).toUpperCase();
		String nome = autorParte.substring(0, autorParte.lastIndexOf(" "));

		String autorParte = sobrenome.concat(", ").concat(nome) + ". ";
		String tituloParte = this.getTituloParte() + ". In: ";
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
		String paginas = this.getQuantidadePaginas() + "p.";
		String formatoFinal = autorParte + tituloParte + autores + titulo + subtitulo + edicao + local + paginas;
		this.formatoFinal = formatoFinal;

	}

	@Override
	public String toString() {
		return super.toString() + "ParteMonografia [autorParte=" + autorParte + ", tituloParte=" + tituloParte
				+ ", secao=" + secao
				+ ", capitulo=" + capitulo + ", volume=" + volume + "]";
	}

}
