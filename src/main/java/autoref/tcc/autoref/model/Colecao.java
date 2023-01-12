package autoref.tcc.autoref.model;

import java.util.List;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.CascadeType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

@Entity
public class Colecao {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idColecao;
	private String nome;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "fk_usuario")
	private Usuario usuario;

	@ManyToMany(cascade = CascadeType.PERSIST)
	@JoinTable(name = "colecao_referencia", joinColumns = @JoinColumn(name = "id_colecao"), inverseJoinColumns = @JoinColumn(name = "id_referencia"))
	private List<Referencia> referencias;

	public Colecao(Integer idColecao, String nome, Usuario usuario, List<Referencia> referencias) {
		this.idColecao = idColecao;
		this.nome = nome;
		this.usuario = usuario;
		this.referencias = referencias;
	}

	public Colecao() {
	}

	public void adicionaReferencia(Referencia referencia) {
		referencias.add(referencia);
		referencia.adicionaColecao(this);
	}

	public Integer getIdColecao() {
		return this.idColecao;
	}

	public void setIdColecao(Integer idColecao) {
		this.idColecao = idColecao;
	}

	public String getNome() {
		return this.nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Usuario getUsuario() {
		return this.usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public List<Referencia> getReferencias() {
		return this.referencias;
	}

	public void setReferencias(List<Referencia> referencias) {
		this.referencias = referencias;
	}

}
