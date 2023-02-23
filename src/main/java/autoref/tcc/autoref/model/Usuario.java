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
    private int xp;
    private boolean ativo;
    private boolean possuiAcademicoNovato;
    private boolean possuiAcademicoEsforcado;
    private boolean possuiAcademicoMestre;
    private boolean possuiAcademicoAdmirado;
    private boolean possuiPesquisadorIniciante;
    private boolean possuiPesquisadorAtarefado;
    private boolean possuiPesquisadorExpert;
    private boolean possuiPesquisadorSabio;

    @OneToMany(mappedBy = "usuario", cascade = { CascadeType.PERSIST, CascadeType.REMOVE })
    private List<Colecao> colecoesUsuario;

    @OneToMany(mappedBy = "usuario", cascade = { CascadeType.PERSIST })
    private List<Referencia> referenciasUsuario;

    public Usuario(Integer idUsuario, String nome, String email, String senha, List<Colecao> colecoesUsuario,
            List<Referencia> referenciasUsuario, int xp, boolean ativo) {
        this.idUsuario = idUsuario;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.colecoesUsuario = colecoesUsuario;
        this.referenciasUsuario = referenciasUsuario;
        this.xp = xp;
        this.ativo = ativo;
    }

    public Usuario() {
    }

    public Integer getIdUsuario() {
        return this.idUsuario;
    }

    public void adicionaColecao(Colecao colecao) {
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

    public int getXp() {
        return xp;
    }

    public void setXp(int xp) {
        this.xp = this.getXp() + xp;
    }

    public boolean isAtivo() {
        return this.ativo;
    }

    public void setAtivo(boolean ativo) {
        this.ativo = ativo;
    }

    public boolean isPossuiAcademicoNovato() {
        return this.possuiAcademicoNovato;
    }

    public void setPossuiAcademicoNovato(boolean possuiAcademicoNovato) {
        this.possuiAcademicoNovato = possuiAcademicoNovato;
    }

    public boolean isPossuiAcademicoEsforcado() {
        return this.possuiAcademicoEsforcado;
    }

    public void setPossuiAcademicoEsforcado(boolean possuiAcademicoEsforcado) {
        this.possuiAcademicoEsforcado = possuiAcademicoEsforcado;
    }

    public boolean isPossuiAcademicoMestre() {
        return this.possuiAcademicoMestre;
    }

    public void setPossuiAcademicoMestre(boolean possuiAcademicoMestre) {
        this.possuiAcademicoMestre = possuiAcademicoMestre;
    }

    public boolean isPossuiAcademicoAdmirado() {
        return this.possuiAcademicoAdmirado;
    }

    public void setPossuiAcademicoAdmirado(boolean possuiAcademicoAdmirado) {
        this.possuiAcademicoAdmirado = possuiAcademicoAdmirado;
    }

    public boolean isPossuiPesquisadorIniciante() {
        return this.possuiPesquisadorIniciante;
    }

    public void setPossuiPesquisadorIniciante(boolean possuiPesquisadorIniciante) {
        this.possuiPesquisadorIniciante = possuiPesquisadorIniciante;
    }

    public boolean isPossuiPesquisadorAtarefado() {
        return this.possuiPesquisadorAtarefado;
    }

    public void setPossuiPesquisadorAtarefado(boolean possuiPesquisadorAtarefado) {
        this.possuiPesquisadorAtarefado = possuiPesquisadorAtarefado;
    }

    public boolean isPossuiPesquisadorExpert() {
        return this.possuiPesquisadorExpert;
    }

    public void setPossuiPesquisadorExpert(boolean possuiPesquisadorExpert) {
        this.possuiPesquisadorExpert = possuiPesquisadorExpert;
    }

    public boolean isPossuiPesquisadorSabio() {
        return this.possuiPesquisadorSabio;
    }

    public void setPossuiPesquisadorSabio(boolean possuiPesquisadorSabio) {
        this.possuiPesquisadorSabio = possuiPesquisadorSabio;
    }

    @Override
    public String toString() {
        return "Usuario [idUsuario=" + idUsuario + ", nome=" + nome + ", email=" + email + ", senha=" + senha + ", xp="
                + xp + ", ativo=" + ativo + ", possuiAcademicoNovato=" + possuiAcademicoNovato
                + ", possuiAcademicoEsforcado=" + possuiAcademicoEsforcado + ", possuiAcademicoMestre="
                + possuiAcademicoMestre + ", possuiAcademicoAdmirado=" + possuiAcademicoAdmirado
                + ", possuiPesquisadorIniciante=" + possuiPesquisadorIniciante + ", possuiPesquisadorAtarefado="
                + possuiPesquisadorAtarefado + ", possuiPesquisadorExpert=" + possuiPesquisadorExpert
                + ", possuiPesquisadorSabio=" + possuiPesquisadorSabio + ", colecoesUsuario=" + colecoesUsuario
                + ", referenciasUsuario=" + referenciasUsuario + "]";
    }

}
