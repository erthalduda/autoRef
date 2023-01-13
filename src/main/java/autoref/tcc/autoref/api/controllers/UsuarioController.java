package autoref.tcc.autoref.api.controllers;

import java.util.List;

import javax.net.ssl.HttpsURLConnection;

import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
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
    ModelMapper mapper = new ModelMapper();

    public UsuarioController(UsuarioService serviceUsuario) {
        this.serviceUsuario = serviceUsuario;
    }

    @PostMapping("/cadastro")
    public ResponseEntity<?> cadastraUsuario(@RequestBody UsuarioDTO usuarioDTO) {
        Usuario usuario = mapper.map(usuarioDTO, Usuario.class);
        try {
            Usuario salvo = serviceUsuario.cadastraUsuario(usuario);
            return new ResponseEntity<>(salvo, HttpStatus.CREATED);
        } catch (ExcecoesAutoref excecao) {
            return new ResponseEntity<>(excecao.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> autenticaUsuario(@RequestBody UsuarioDTO usuarioDTO) {
        try {
            Usuario autenticado = serviceUsuario.autenticaUsuario(usuarioDTO.getEmail(), usuarioDTO.getSenha());
            return new ResponseEntity<>(autenticado, HttpStatus.OK);
        } catch (ExcecoesAutoref excecao) {
            return new ResponseEntity<>(excecao.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    // ainda não está pronta, temos que testar mais
    @DeleteMapping("/excluir")
    public ResponseEntity<?> excluiUsuario(@RequestBody UsuarioDTO usuarioDTO) {
        Usuario usuario = mapper.map(usuarioDTO, Usuario.class);
        try {
            serviceUsuario.excluiUsuario(usuario.getIdUsuario());
            return new ResponseEntity<>("Exclusão realizada com sucesso.", HttpStatus.OK);
        } catch (ExcecoesAutoref excecao) {
            return new ResponseEntity<>("Erro ao excluir.", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/ranking")
    public ResponseEntity<?> rankingUsuarios() {
        try {
            List<Usuario> ranking = serviceUsuario.rankingUsuarios();
            for (Usuario usuario : ranking) {
                int posicaoRanking = ranking.indexOf(usuario);
                posicaoRanking++;
                String usuarioRanking = "#" + posicaoRanking + " " + usuario.getNome() + " " + usuario.getXp();
                System.out.println(usuarioRanking);
            }
            //verificar como retornar o usuário sem printar
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
