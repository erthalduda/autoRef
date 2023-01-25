package autoref.tcc.autoref.model;

import java.util.ArrayList;

import javax.persistence.Entity;

@Entity
public class MonografiaMeioEletronico extends Monografia {

	private String descricaoDoSuporte;

	public MonografiaMeioEletronico(Integer id, String titulo, Usuario usuario, ArrayList<String> autor, String subtitulo,
			String anoPublicacao, String cidade, String curso, String anoEntrega,
			String quantidadePaginas, String edicao, String editora, String descricaoDoSuporte) {
		super(id, titulo, usuario, autor, subtitulo, anoPublicacao, cidade, curso, anoEntrega,
				quantidadePaginas, edicao, editora);
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
