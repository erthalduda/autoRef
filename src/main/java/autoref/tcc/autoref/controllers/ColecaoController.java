package autoref.tcc.autoref.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import autoref.tcc.autoref.model.Colecao;
import autoref.tcc.autoref.repositories.ColecaoRepository;


@Controller
@RequestMapping("/colecoes")
public class ColecaoController {
    
    @Autowired
    private ColecaoRepository repositorioColecoes;

    @PostMapping("/cadastrar")
    public void cadastrarColecao(Colecao colecao){
        repositorioColecoes.save(colecao);
    }
    
}
