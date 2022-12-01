package autoref.tcc.autoref.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import autoref.tcc.autoref.model.Referencia;
import autoref.tcc.autoref.repositories.ReferenciaRepository;

@Controller
@RequestMapping("/referencias")
public class ReferenciaController {
    
    @Autowired
    private ReferenciaRepository repositorioReferencias;

    @PostMapping("/cadastrar")
    @ResponseBody
    public void cadastraReferencia(Referencia referencia){
        repositorioReferencias.save(referencia);
    }
}