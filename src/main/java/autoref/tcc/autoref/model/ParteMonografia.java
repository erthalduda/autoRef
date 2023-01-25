package autoref.tcc.autoref.model;

import java.util.ArrayList;
import java.util.Collections;

import javax.persistence.Basic;
import javax.persistence.Entity;

@Entity
public class ParteMonografia extends Monografia {

	@Basic
	private ArrayList<String> autorParte;

	private String tituloParte;

	private String secao;

	private int capitulo;

	private int volume;

	public ParteMonografia(Integer id, String titulo, Usuario usuario, ArrayList<String> autor, String subtitulo,
			String anoPublicacao, String cidade, String curso, String anoEntrega,
			String quantidadePaginas, String edicao, String editora, ArrayList<String> autorParte, String tituloParte,
			String secao, int capitulo, int volume) {
		super(id, titulo, usuario, autor, subtitulo, anoPublicacao, cidade, curso, anoEntrega,
				quantidadePaginas, edicao, editora);
		this.autorParte = autorParte;
		this.tituloParte = tituloParte;
		this.secao = secao;
		this.capitulo = capitulo;
		this.volume = volume;
	}

	public ParteMonografia() {

	}

	public ArrayList<String> getAutorParte() {
		return this.autorParte;
	}

	public void setAutorParte(ArrayList<String> autorParte) {
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

}
