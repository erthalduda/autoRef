package autoref.tcc.autoref.api.dtos;

import autoref.tcc.autoref.model.Usuario;

public class ColecaoDTO {

    private String nome;
    private Usuario usuario;

    public ColecaoDTO() {
    }

    public ColecaoDTO(String nome, Usuario usuario) {
        this.nome = nome;
        this.usuario = usuario;
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

}
