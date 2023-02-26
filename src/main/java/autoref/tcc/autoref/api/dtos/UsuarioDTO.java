package autoref.tcc.autoref.api.dtos;

import autoref.tcc.autoref.model.Usuario;

public class UsuarioDTO {

    private Integer idUsuario;
    private String email;
    private String nome;
    private String senha;

    public UsuarioDTO() {

    }

    public UsuarioDTO(Integer idUsuario, String email, String nome, String senha) {
        this.idUsuario = idUsuario;
        this.email = email;
        this.nome = nome;
        this.senha = senha;
    }

    public UsuarioDTO(Usuario usuario) {
        this.idUsuario = usuario.getIdUsuario();
         this.email = usuario.getEmail();
        this.nome = usuario.getNome();
        this.senha = usuario.getSenha();
    }

    public Integer getIdUsuario() {
        return this.idUsuario;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSenha() {
        return this.senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

}
