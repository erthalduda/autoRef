package autoref.tcc.autoref.api.dtos.response;

import lombok.Data;

@Data
public class ReferenciaResponse {

    private Integer id;
    private String citacaoIndireta;
    private String citacaoDireta;

    private Integer idUsuario;
    public ReferenciaResponse(Integer idUsuario, Integer id, String citacaoDireta, String citacaoIndireta) {
        this.id = id;
        this.idUsuario = idUsuario;
        this.citacaoDireta = citacaoDireta;
        this.citacaoIndireta = citacaoIndireta;
    }
}
