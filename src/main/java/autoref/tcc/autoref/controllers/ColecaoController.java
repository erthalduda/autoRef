package autoref.tcc.autoref.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import autoref.tcc.autoref.model.Colecao;
import autoref.tcc.autoref.repositories.ColecaoRepository;


@Controller
@RequestMapping("/colecoes")
public class ColecaoController {
    
    @Autowired
    private ColecaoRepository repositorioColecoes;

    @PostMapping("/cadastrar")
    @ResponseBody
    public String cadastrarColecao(@RequestBody Colecao colecaoJSON){
        repositorioColecoes.save(colecaoJSON);
        return "Coleção cadastrada com sucesso!";
    }
    
}
