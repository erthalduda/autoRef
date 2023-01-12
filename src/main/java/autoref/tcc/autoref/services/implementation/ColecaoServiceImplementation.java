package autoref.tcc.autoref.services.implementation;

import java.util.Objects;
import java.util.Optional;

import org.springframework.stereotype.Service;

import autoref.tcc.autoref.exceptions.ExcecoesAutoref;
import autoref.tcc.autoref.model.Colecao;
import autoref.tcc.autoref.model.Referencia;
import autoref.tcc.autoref.model.Usuario;
// import autoref.tcc.autoref.model.Usuario;
import autoref.tcc.autoref.repositories.ColecaoRepository;
import autoref.tcc.autoref.repositories.UsuarioRepository;
// import autoref.tcc.autoref.repositories.UsuarioRepository;
import autoref.tcc.autoref.services.ColecaoService;

@Service
public class ColecaoServiceImplementation implements ColecaoService {

    private ColecaoRepository repositorioColecao;
    private UsuarioRepository repositorioUsuario;

    // private UsuarioRepository repositoryUsuario;

    public ColecaoServiceImplementation(ColecaoRepository repositorioColecao) {
        this.repositorioColecao = repositorioColecao;
    }

    @Override
    public Colecao cadastraColecao(Colecao colecao) {
    // passar usuário como parâmetro
    //     usuario.setXp(100); 
        return repositorioColecao.save(colecao);
    }

    @Override
    public void deletaColecao(Colecao colecao) {
        Objects.requireNonNull(colecao.getIdColecao());
        repositorioColecao.delete(colecao);
    }

    @Override
    public void atualizaColecao(Colecao colecao) {
        Objects.requireNonNull(colecao.getIdColecao());
        repositorioColecao.save(colecao);
    }

    @Override
    public Colecao adicionaReferencia(Colecao colecao, Referencia referencia, Usuario usuario) {
        Optional<Colecao> c = repositorioColecao.findById(colecao.getIdColecao());
        if (c.isEmpty()) {
            throw new ExcecoesAutoref("Coleção inválida.");
        }
    // passar o usuário como parâmetro também
    //  if(colecao.getreferencias().size()==10){
    //     usuario.setXp(500);
    //  }
    //  if(colecao.getreferencias().size()==20){
    //     usuario.setXp(1500);
    // }
    //     usuario.setXp(50); 

    if(referencia.getUsuario().getIdUsuario()!=usuario.getIdUsuario()){
        Optional<Usuario> u = repositorioUsuario.findById(usuario.getIdUsuario());
        u.get().setXp(200);
    }
        c.get().adicionaReferencia(referencia);
        return repositorioColecao.save(c);
    }

    @Override
    public void deletaReferencia(Colecao colecao, Referencia referencia) {
        Optional<Colecao> c = repositorioColecao.findById(colecao.getIdColecao());
        c.get().getreferencias().remove(referencia);
    }

    // @Override
    // public List<Colecao> colecoesPorUsuario(Integer idUsuario) {
    //     return repositorioColecao.findByUsuarioIdUsuario(idUsuario);
    // }


    
}
