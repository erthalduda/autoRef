package autoref.tcc.autoref.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import autoref.tcc.autoref.model.Referencia;
import autoref.tcc.autoref.repositories.ReferenciaRepository;

@RestController
@RequestMapping("/referencias")
public class ReferenciaController {

    @Autowired
    private ReferenciaRepository repositorioReferencias;

    @PostMapping("/cadastrar")
    public String cadastraReferencia(@RequestBody Referencia referenciaJSON) {
        repositorioReferencias.save(referenciaJSON);
        return "Referência cadastrada com sucesso!";
    }
}