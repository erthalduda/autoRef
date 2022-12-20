package autoref.tcc.autoref.api.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import autoref.tcc.autoref.model.Referencia;
import autoref.tcc.autoref.services.ReferenciaService;

@RestController
@RequestMapping("/referencias")
public class ReferenciaController {

    private ReferenciaService serviceReferencia;
    ModelMapper mapper = new ModelMapper();

    public ReferenciaController(ReferenciaService serviceReferencia) {
        this.serviceReferencia = serviceReferencia;
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastraReferencia(@RequestBody Referencia referenciaJSON) {
        try {
            serviceReferencia.cadastraReferencia(referenciaJSON);
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/editar")
    public ResponseEntity<?> atualizaReferencia(@RequestBody Referencia referenciaJSON) {
        try {
            serviceReferencia.atualizaReferencia(referenciaJSON);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/excluir")
    public ResponseEntity<?> deletaReferencia(@RequestBody Referencia referenciaJSON) {
        try {
            serviceReferencia.deletaReferencia(referenciaJSON);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}