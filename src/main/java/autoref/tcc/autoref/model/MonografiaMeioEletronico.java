package autoref.tcc.autoref.model;
import javax.persistence.Entity;

@Entity
public class MonografiaMeioEletronico extends Monografia {

	private String descricaoDoSuporte;

	public MonografiaMeioEletronico(){

	}

	public MonografiaMeioEletronico(Integer id, String titulo, String autor, String subtitulo, String anoPublicacao,
			String cidade, String instituicao, String curso, String anoEntrega, String quantidadePaginas, String edicao,
			String editora, String descricaoDoSuporte) {
		super(id, titulo, autor, subtitulo, anoPublicacao, cidade, instituicao, curso, anoEntrega, quantidadePaginas,
				edicao, editora);
		this.descricaoDoSuporte = descricaoDoSuporte;
	}

	public String getDescricaoDoSuporte() {
		return this.descricaoDoSuporte;
	}

	public void setDescricaoDoSuporte(String descricaoDoSuporte) {
		this.descricaoDoSuporte = descricaoDoSuporte;
	}

}
