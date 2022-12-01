package autoref.tcc.autoref.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import autoref.tcc.autoref.model.Usuario;
import autoref.tcc.autoref.repositories.UsuarioRepository;

@Controller
@RequestMapping("/usuario")
public class UsuarioController {
    
    @Autowired
    private UsuarioRepository repositorioUsuario;

    @PostMapping("/cadastrar")
    @ResponseBody
    public void cadastraUsuario(Usuario usuario){
        repositorioUsuario.save(usuario);
    }
}
