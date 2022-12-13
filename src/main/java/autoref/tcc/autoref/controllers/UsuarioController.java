package autoref.tcc.autoref.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import autoref.tcc.autoref.model.Usuario;
import autoref.tcc.autoref.repositories.UsuarioRepository;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
    
    @Autowired
    private UsuarioRepository repositorioUsuario;

    @PostMapping("/cadastrar")
    public String cadastraUsuario(@RequestBody Usuario usuarioJSON){
        repositorioUsuario.save(usuarioJSON);
        return "Cadastro realizado com sucesso! Realize seu login.";
    }
}
