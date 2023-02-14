package autoref.tcc.autoref.api.controllers;

import java.util.HashMap;
import java.util.Map;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import autoref.tcc.autoref.api.dtos.ReferenciaDTO;
import autoref.tcc.autoref.exceptions.ExcecoesAutoref;
import autoref.tcc.autoref.model.*;
import autoref.tcc.autoref.services.ReferenciaService;

@CrossOrigin(origins = "https://localhost/3000")
@RestController
@RequestMapping("/referencias")
public class ReferenciaController {

    private Map<String, Class<? extends Referencia>> tipos = new HashMap<>();

    private ReferenciaService serviceReferencia;
    ModelMapper mapper = new ModelMapper();

    public ReferenciaController(ReferenciaService serviceReferencia) {
        this.serviceReferencia = serviceReferencia;

        tipos.put("artigo", Artigo.class);
        tipos.put("monografia", Monografia.class);
        tipos.put("parteMonografia", ParteMonografia.class);
        tipos.put("monografiaMeioEletronico", MonografiaMeioEletronico.class);
        tipos.put("monografiaOnline", MonografiaOnline.class);
        tipos.put("colecaoPublicacaoPeriodica", ColecaoPublicacaoPeriodica.class);
        tipos.put("parteColecaoPublicacaoPeriodica", ParteColecaoPublicacaoPeriodica.class);
        tipos.put("colecaoPublicacaoPeriodicaEletronico", ColecaoPublicacaoPeriodicaEletronico.class);
        tipos.put("fasciculo", Fasciculo.class);
        tipos.put("trabalhoAcademico", TrabalhoAcademico.class);
        tipos.put("website", Website.class);
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastraReferencia(@RequestBody ReferenciaDTO referenciaDTO) {
        Referencia referencia = mapper.map(referenciaDTO, tipos.get(referenciaDTO.getTipo()));
        try {
            referencia.formata();
            referencia.formataCitacoes();
            referencia.setTodosOsDados();
            Referencia salva = serviceReferencia.cadastraReferencia(referencia);
            return new ResponseEntity<>(salva, HttpStatus.CREATED);
        } catch (ExcecoesAutoref excecao) {
            return new ResponseEntity<>(excecao.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    // @DeleteMapping("/excluir/{id}")
    // public ResponseEntity<?> deletaReferencia(@PathVariable(name = "id") Integer
    // id) {
    // try {
    // serviceReferencia.deletaReferencia(id);
    // return new ResponseEntity<>("Referência excluída com sucesso",
    // HttpStatus.OK);
    // } catch (Exception e) {
    // return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    // }
    // }

    @GetMapping("/buscar/geral/{pesquisa}")
    public ResponseEntity<?> buscaReferenciaRepositorioGeral(@PathVariable(name = "pesquisa") String pesquisa) {
        try {
            List<String> buscar = serviceReferencia.buscarNoRepositorioGeral(pesquisa);
            return new ResponseEntity<>(buscar, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("buscar/privado/{idUsuario}")
    public ResponseEntity<?> buscaTodasReferenciasRepositorioPrivado(
            @PathVariable(name = "idUsuario") Integer idUsuario) {

        try {
            List<String> buscar = serviceReferencia.buscarTodasNoRepositorioPrivado(idUsuario);
            return new ResponseEntity<>(buscar, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("buscar/privado/{idUsuario}/{pesquisa}")
    public ResponseEntity<?> buscarReferenciaEspecificaRepositorioPrivado(
            @PathVariable(name = "idUsuario") Integer idUsuario,
            @PathVariable(name = "pesquisa") String pesquisa) {
        try {
            List<String> buscar = serviceReferencia.buscarEspecificaNoRepositorioPrivado(pesquisa, idUsuario);
            return new ResponseEntity<>(buscar, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}