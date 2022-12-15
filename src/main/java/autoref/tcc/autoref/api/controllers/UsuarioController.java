package autoref.tcc.autoref.api.controllers;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import autoref.tcc.autoref.api.dtos.UsuarioDTO;
import autoref.tcc.autoref.exceptions.ExcecoesAutoref;
import autoref.tcc.autoref.model.Usuario;
import autoref.tcc.autoref.services.UsuarioService;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    private UsuarioService serviceUsuario;

    public UsuarioController(UsuarioService serviceUsuario){
        this.serviceUsuario = serviceUsuario;
    }

    @PostMapping("/cadastro")
    public ResponseEntity<?> cadastraUsuario(@RequestBody UsuarioDTO usuarioDTO){
        Usuario usuario = new Usuario();
        usuario.setNome(usuarioDTO.getNome());
        usuario.setEmail(usuarioDTO.getEmail());
        usuario.setSenha(usuarioDTO.getSenha());
        try{
            Usuario salvo = serviceUsuario.cadastraUsuario(usuario);
            return new ResponseEntity<>(salvo, HttpStatus.CREATED);
        }catch(ExcecoesAutoref excecao){
            return new ResponseEntity<>(excecao.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> autenticaUsuario(@RequestBody UsuarioDTO usuarioDTO){
        try{
            Usuario autenticado = serviceUsuario.autenticaUsuario(usuarioDTO.getEmail(), usuarioDTO.getSenha());
            return new ResponseEntity<>(autenticado, HttpStatus.OK);
        }catch(ExcecoesAutoref excecao){
            return new ResponseEntity<>(excecao.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
