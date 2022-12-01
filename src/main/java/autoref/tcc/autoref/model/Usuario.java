package autoref.tcc.autoref.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idUsuario;
    private String nome;
    private String email;
    private String senha;

    @OneToMany(mappedBy = "usuario", cascade = { CascadeType.PERSIST, CascadeType.DETACH })
    private List<Colecao> colecoesUsuario;

    @OneToMany(mappedBy = "usuario", cascade = { CascadeType.PERSIST, CascadeType.DETACH })
    private List<Referencia> referenciasUsuario;

    public Usuario(Integer idUsuario, String nome, String email, String senha, List<Colecao> colecoesUsuario, List<Referencia> referenciasUsuario) {
        this.idUsuario = idUsuario;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.colecoesUsuario = colecoesUsuario;
        this.referenciasUsuario = referenciasUsuario;
    }

    public Usuario() {
    }

    public Integer getIdUsuario() {
        return this.idUsuario;
    }

    public void adicionaColecao(Colecao colecao){
        this.colecoesUsuario.add(colecao);
        colecao.setUsuario(this);
    }

    public void setIdUsuario(Integer idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return this.senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public List<Colecao> getColecoesUsuario() {
        return this.colecoesUsuario;
    }

    public void setColecoesUsuario(List<Colecao> colecoesUsuario) {
        this.colecoesUsuario = colecoesUsuario;
    }

    public List<Referencia> getReferenciasUsuario() {
        return this.referenciasUsuario;
    }

    public void setReferenciasUsuario(List<Referencia> referenciasUsuario) {
        this.referenciasUsuario = referenciasUsuario;
    }

}
