package autoref.tcc.autoref.api.controllers;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import autoref.tcc.autoref.api.dtos.ColecaoDTO;
import autoref.tcc.autoref.api.dtos.ReferenciaDTO;
import autoref.tcc.autoref.exceptions.ExcecoesAutoref;
import autoref.tcc.autoref.model.Colecao;
import autoref.tcc.autoref.model.Referencia;
import autoref.tcc.autoref.services.ColecaoService;

@RestController
@RequestMapping("/colecoes")
public class ColecaoController {

    private ColecaoService serviceColecao;
    ModelMapper mapper = new ModelMapper();

    public ColecaoController(ColecaoService serviceColecao) {
        this.serviceColecao = serviceColecao;
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrarColecao(@RequestBody ColecaoDTO colecaoDTO) {
        Colecao colecao = mapper.map(colecaoDTO, Colecao.class);
        try {
            Colecao salvo = serviceColecao.cadastraColecao(colecao);
            return new ResponseEntity<>(salvo, HttpStatus.CREATED);
        } catch (ExcecoesAutoref excecao) {
            return new ResponseEntity<>(excecao.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/editar")
    public ResponseEntity<?> atualizaColecao(@RequestBody ColecaoDTO colecaoDTO) {
        Colecao colecao = mapper.map(colecaoDTO, Colecao.class);
        try {
            serviceColecao.atualizaColecao(colecao);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (ExcecoesAutoref excecao) {
            return new ResponseEntity<>(excecao.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/excluir")
    public ResponseEntity<?> excluiColecao(@RequestBody ColecaoDTO colecaoDTO) {
        Colecao colecao = mapper.map(colecaoDTO, Colecao.class);
        try {
            serviceColecao.deletaColecao(colecao);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (ExcecoesAutoref excecao) {
            return new ResponseEntity<>(excecao.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/adicionar")
    public ResponseEntity<?> adicionaReferencia(@RequestBody ColecaoDTO colecaoDTO, ReferenciaDTO referenciaDTO) {
        Colecao colecao = mapper.map(colecaoDTO, Colecao.class);
        Referencia referencia = mapper.map(referenciaDTO, Referencia.class);
        try {
            serviceColecao.adicionaReferencia(colecao, referencia);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (ExcecoesAutoref excecao) {
            return new ResponseEntity<>(excecao.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    // @GetMapping("/buscar/{idUsuario}")
    // public List<Colecao> colecoesPorUsuario(@PathVariable(name = "idUsuario") Integer idUsuario){
    //     try{

    //     }
    //     return null;
    // }
}
