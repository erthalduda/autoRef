package autoref.tcc.autoref.model;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import javax.persistence.Entity;

@Entity
public class MonografiaOnline extends Monografia {

	private String url;

	private Date dataAcesso;

	public MonografiaOnline(Integer id, String titulo, String formatoFinal, String citacaoIndireta,
			String citacaoDireta, String tipo, List<Colecao> colecoes, Usuario usuario, ArrayList<String> autor,
			String subtitulo, String anoPublicacao, String cidade, String anoEntrega, String edicao, String editora, String url, Date dataAcesso) {
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

	public Date getDataAcesso() {
		return this.dataAcesso;
	}

	public void setDataAcesso(Date dataAcesso) {
		this.dataAcesso = dataAcesso;
	}

	@Override
	public void formata() {

		Calendar calendario = Calendar.getInstance();
		calendario.setTime(this.getDataAcesso());
		int mes = calendario.get(Calendar.MONTH);
		int dia = calendario.get(Calendar.DAY_OF_MONTH);
		int ano = calendario.get(Calendar.YEAR);

		String autores = this.formataAutores();
		String titulo = this.getTitulo().toUpperCase();
		String subtitulo = "";
		if (this.getSubtitulo()!=null) {
			subtitulo = ": " + this.getSubtitulo() + ". ";
		} else {
			subtitulo = ". ";
		}
		String edicao = this.getEdicao() + ". ed. ";
		String local = this.getCidade() + ": " + this.getEditora() + ", " + this.getAnoPublicacao() + ". ";
		String mesString = "";
		switch (mes) {
			case 1:
				mesString = " jan. ";
				break;
			case 2:
				mesString = " fev. ";
				break;
			case 3:
				mesString = " mar. ";
				break;
			case 4:
				mesString = " abr. ";
				break;
			case 5:
				mesString = " maio ";
				break;
			case 6:
				mesString = " jun. ";
				break;
			case 7:
				mesString = " jul. ";
				break;
			case 8:
				mesString = " ago. ";
				break;
			case 9:
				mesString = " set. ";
				break;
			case 10:
				mesString = " out. ";
				break;
			case 11:
				mesString = " nov. ";
				break;
			case 12:
				mesString = " dez. ";
				break;
		}
		String url = ". Disponível em: " + this.getUrl() + ". Acesso em: " + dia + mesString + ano + ".";
		String formatoFinal = autores + titulo + subtitulo + edicao + local + url;
		this.formatoFinal = formatoFinal;

	}

}
