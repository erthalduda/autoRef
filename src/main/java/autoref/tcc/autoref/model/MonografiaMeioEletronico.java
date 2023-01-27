package autoref.tcc.autoref.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;

@Entity
public class MonografiaMeioEletronico extends Monografia {

	private String descricaoDoSuporte;

	public MonografiaMeioEletronico(Integer id, String titulo, String formatoFinal, String citacaoIndireta,
			String citacaoDireta, String tipo, List<Colecao> colecoes, Usuario usuario, ArrayList<String> autor,
			String subtitulo, String anoPublicacao, String cidade, String anoEntrega,
			String quantidadePaginas, String edicao, String editora, String descricaoDoSuporte) {
		super(id, titulo, formatoFinal, citacaoIndireta, citacaoDireta, tipo, colecoes, usuario, autor, subtitulo,
				anoPublicacao, cidade, anoEntrega, quantidadePaginas, edicao, editora);
		this.descricaoDoSuporte = descricaoDoSuporte;
	}

	public MonografiaMeioEletronico() {

	}

	public String getDescricaoDoSuporte() {
		return this.descricaoDoSuporte;
	}

	public void setDescricaoDoSuporte(String descricaoDoSuporte) {
		this.descricaoDoSuporte = descricaoDoSuporte;
	}

}
