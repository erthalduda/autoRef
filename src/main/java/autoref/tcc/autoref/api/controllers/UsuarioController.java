package autoref.tcc.autoref.api.controllers;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import autoref.tcc.autoref.api.dtos.UsuarioDTO;
import autoref.tcc.autoref.exceptions.ExcecoesAutoref;
import autoref.tcc.autoref.model.*;
import autoref.tcc.autoref.services.UsuarioService;
import autoref.tcc.autoref.services.ReferenciaService;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    private UsuarioService serviceUsuario;
    private ReferenciaService serviceReferencia;
    ModelMapper mapper = new ModelMapper();

    public UsuarioController(UsuarioService serviceUsuario, ReferenciaService serviceReferencia) {
        this.serviceUsuario = serviceUsuario;
        this.serviceReferencia = serviceReferencia;
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

    @DeleteMapping("/excluir")
    public ResponseEntity<?> excluiUsuario(@RequestBody UsuarioDTO usuarioDTO) {
        Optional<Usuario> usuarioExcluir = serviceUsuario.buscaPorEmail(usuarioDTO.getEmail());
        Integer idUsuario = usuarioExcluir.get().getIdUsuario();
        try {
            List<Referencia> setIdNull = serviceUsuario.buscarPorFkUsuario(idUsuario);
            for (Referencia referenciaNaLista : setIdNull) {
                referenciaNaLista.setUsuario(null);
                serviceReferencia.atualizaReferencia(referenciaNaLista);
            }
            serviceUsuario.excluiUsuario(usuarioExcluir.get().getIdUsuario());
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
                usuario.setColecoesUsuario(null);
                usuario.setReferenciasUsuario(null);
            }
            return new ResponseEntity<>(ranking, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/editar/{idUsuario}")
    public ResponseEntity<?> atualizaUsuario(@PathVariable(name = "idUsuario") Integer idUsuario,
            @RequestBody UsuarioDTO usuarioDTO) {
        Optional<Usuario> usuarioNovo = serviceUsuario.buscaPorId(idUsuario);
        Usuario usuarioAtualizar = new Usuario();

        if (usuarioNovo.isPresent()) {
            usuarioAtualizar = usuarioNovo.get();

            usuarioAtualizar.setNome(usuarioDTO.getNome());
            usuarioAtualizar.setEmail(usuarioDTO.getEmail());
            usuarioAtualizar.setSenha(usuarioDTO.getSenha());

            usuarioAtualizar.setColecoesUsuario(null);
            usuarioAtualizar.setReferenciasUsuario(null);
        }
        try {
            serviceUsuario.atualizaUsuario(usuarioAtualizar);
            return new ResponseEntity<>("Atualização concluída com sucesso.", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
