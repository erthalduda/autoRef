package autoref.tcc.autoref.services.implementation;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import autoref.tcc.autoref.exceptions.ExcecoesAutoref;
import autoref.tcc.autoref.model.Colecao;
import autoref.tcc.autoref.model.Referencia;
// import autoref.tcc.autoref.model.Usuario;
// import autoref.tcc.autoref.model.Usuario;
import autoref.tcc.autoref.repositories.ColecaoRepository;
// import autoref.tcc.autoref.repositories.UsuarioRepository;
// import autoref.tcc.autoref.repositories.UsuarioRepository;
import autoref.tcc.autoref.services.ColecaoService;

@Service
public class ColecaoServiceImplementation implements ColecaoService {

    private ColecaoRepository repositorioColecao;
    // private UsuarioRepository repositorioUsuario;

    // private UsuarioRepository repositoryUsuario;

    public ColecaoServiceImplementation(ColecaoRepository repositorioColecao) {
        this.repositorioColecao = repositorioColecao;
    }

    @Override
    @Transactional
    public Colecao cadastraColecao(Colecao colecao) {
        // usuario.setXp(100);
        return repositorioColecao.save(colecao);
    }

    @Override
    @Transactional
    public void deletaColecao(Colecao colecao) {
        Objects.requireNonNull(colecao.getIdColecao());
        repositorioColecao.delete(colecao);
    }

    @Override
    @Transactional
    public void atualizaColecao(Colecao colecao) {
        Objects.requireNonNull(colecao.getIdColecao());
        repositorioColecao.save(colecao);
    }

    @Override
    @Transactional
    //talvez não precise passar o usuário como parâmetro, a ser estudado
    public Colecao adicionaReferencia(Colecao colecao, Referencia referencia) {
        Optional<Colecao> colecaoParaAdicionarReferencias = repositorioColecao.findById(colecao.getIdColecao());
        if (colecaoParaAdicionarReferencias.isEmpty()) {
            throw new ExcecoesAutoref("Coleção inválida.");
        }
    
        // if(colecao.getReferencias().size()==10){
        //     usuario.setXp(500);
        // }
        // if(colecao.getReferencias().size()==20){
        //     usuario.setXp(1500);
        // }
        //     usuario.setXp(50); 

        // if(referencia.getUsuario().getIdUsuario()!=usuario.getIdUsuario()){
        //     Optional<Usuario> u = repositorioUsuario.findById(usuario.getIdUsuario());
        //     u.get().setXp(200);
        // }
        
        colecaoParaAdicionarReferencias.get().adicionaReferencia(referencia);
        return repositorioColecao.save(colecaoParaAdicionarReferencias);
        }

    @Override
    @Transactional
    public void deletaReferencia(Colecao colecao, Referencia referencia) {
        Optional<Colecao> colecaoParaRemoverReferencia = repositorioColecao.findById(colecao.getIdColecao());
        colecaoParaRemoverReferencia.get().getReferencias().remove(referencia);
    }

    @Override
    public List<Colecao> colecoesPorUsuario(Integer idUsuario) {
        return repositorioColecao.findByUsuario(idUsuario);
    }


    
}
