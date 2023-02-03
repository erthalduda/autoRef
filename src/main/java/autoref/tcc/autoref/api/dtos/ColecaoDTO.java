package autoref.tcc.autoref.api.dtos;

public class ColecaoDTO {

    String nome;

    public ColecaoDTO() {
    }

    public ColecaoDTO(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    };

}
