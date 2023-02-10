package autoref.tcc.autoref.api.controllers;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import autoref.tcc.autoref.api.dtos.*;
import autoref.tcc.autoref.exceptions.ExcecoesAutoref;
import autoref.tcc.autoref.model.*;
import autoref.tcc.autoref.services.*;

@CrossOrigin(origins = "https://localhost/3000")
@RestController
@RequestMapping("/colecoes")
public class ColecaoController {

    private ColecaoService serviceColecao;
    private ReferenciaService serviceReferencia;
    ModelMapper mapper = new ModelMapper();

    public ColecaoController(ColecaoService serviceColecao, ReferenciaService serviceReferencia) {
        this.serviceColecao = serviceColecao;
        this.serviceReferencia = serviceReferencia;
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrarColecao(@RequestBody ColecaoDTO colecaoDTO) {
        Colecao colecao = mapper.map(colecaoDTO, Colecao.class);
        try {
            Colecao cadastrada = serviceColecao.cadastraColecao(colecao);
            return new ResponseEntity<>(cadastrada, HttpStatus.CREATED);
        } catch (ExcecoesAutoref excecao) {
            return new ResponseEntity<>(excecao.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    // SOCORRO DEUS
    @PutMapping("/{idColecao}/editar")
    public ResponseEntity<?> atualizaColecao(@PathVariable(name = "idColecao") Integer idColecao,
            @RequestBody ColecaoDTO colecaoDTO) {
        Colecao colecaoNova = serviceColecao.buscaPorId(idColecao);
        Colecao colecaoAtualizar = new Colecao();

        if (colecaoNova!=null) {
            colecaoAtualizar = colecaoNova;
            colecaoAtualizar.setNome(colecaoDTO.getNome());
            try {
                serviceColecao.atualizaColecao(colecaoAtualizar);
                return new ResponseEntity<>("Coleção editada com sucesso!", HttpStatus.OK);
            } catch (ExcecoesAutoref excecao) {
                return new ResponseEntity<>(excecao.getMessage(), HttpStatus.BAD_REQUEST);
            }
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    @DeleteMapping("/{idColecao}/excluir")
    public ResponseEntity<?> excluiColecao(@PathVariable(name = "idColecao") Integer idColecao) {
        try {
            serviceColecao.deletaColecao(idColecao);
            return new ResponseEntity<>("Coleção excluída com sucesso.", HttpStatus.OK);
        } catch (ExcecoesAutoref excecao) {
            return new ResponseEntity<>(excecao.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{idColecao}/adicionar/{idReferencia}")
    public ResponseEntity<?> adicionaReferencia(@PathVariable(name = "idColecao") Integer idColecao,
            @PathVariable(name = "idReferencia") Integer idReferencia) {
        Colecao colecao = serviceColecao.buscaPorId(idColecao);
        Referencia referencia = serviceReferencia.encontrarPorId(idReferencia);
        try {
            serviceColecao.adicionaReferencia(colecao, referencia);
            return new ResponseEntity<>("Referência adicionada com sucesso!", HttpStatus.OK);
        } catch (ExcecoesAutoref excecao) {
            return new ResponseEntity<>(excecao.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{idColecao}/remover/{idReferencia}")
    public ResponseEntity<?> removeReferencia(@PathVariable(name = "idColecao") Integer idColecao,
            @PathVariable(name = "idReferencia") Integer idReferencia) {
        Colecao colecao = serviceColecao.buscaPorId(idColecao);
        Referencia referencia = serviceReferencia.encontrarPorId(idReferencia);
        try {
            serviceColecao.deletaReferencia(colecao, referencia);
            return new ResponseEntity<>("Referência removida com sucesso!", HttpStatus.OK);
        } catch (ExcecoesAutoref excecao) {
            return new ResponseEntity<>(excecao.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/buscar/{idUsuario}")
    public ResponseEntity<?> colecoesPorUsuario(@PathVariable(name = "idUsuario") Integer idUsuario) {
        try {
            List<Colecao> colecoesUsuario = serviceColecao.colecoesPorUsuario(idUsuario);
            for (Colecao colecao : colecoesUsuario) {
                System.out.println(colecao.getNome());
            }
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}
