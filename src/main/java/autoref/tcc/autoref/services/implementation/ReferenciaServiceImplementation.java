package autoref.tcc.autoref.services.implementation;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import autoref.tcc.autoref.exceptions.ExcecoesAutoref;
import autoref.tcc.autoref.model.Referencia;
// import autoref.tcc.autoref.model.Usuario;
import autoref.tcc.autoref.repositories.ReferenciaRepository;
// import autoref.tcc.autoref.repositories.UsuarioRepository;
import autoref.tcc.autoref.services.ReferenciaService;

@Service
public class ReferenciaServiceImplementation implements ReferenciaService {

    private ReferenciaRepository repositorioReferencia;
    // private UsuarioRepository repositorioUsuario;

    public ReferenciaServiceImplementation(ReferenciaRepository repositorioReferencia) {
        this.repositorioReferencia = repositorioReferencia;
    }

    @Override
    @Transactional
    public Referencia cadastraReferencia(Referencia referencia) {
  
        // int quantidadeReferencias = repositorioUsuario.referenciasPorUsuario(usuario.getIdUsuario());
        
        // if(quantidadeReferencias==10){
        // usuario.setXp(500);
        // }

        // if(quantidadeReferencias==20){
        // usuario.setXp(1500);
        // }
        
        // usuario.setXp(100); 
        return repositorioReferencia.save(referencia);
    }

    @Override
    @Transactional
    public Referencia atualizaReferencia(Referencia referencia) {
        Objects.requireNonNull(referencia.getId());
        return repositorioReferencia.save(referencia);
    }

    @Override
    @Transactional
    public void deletaReferencia(Referencia referencia) {
        Objects.requireNonNull(referencia.getId());
        repositorioReferencia.delete(referencia);
    }

    @Override
    public Referencia encontrarPorId(Integer id) {
        Optional<Referencia> referenciaPorId = repositorioReferencia.findById(id);
        if(!referenciaPorId.isPresent()){
            throw new ExcecoesAutoref("Referência não encontrada.");
        }
        return referenciaPorId.get();
    }

    @Override
    @Transactional
    //vamos disponibilizar filtros, ou a busca será "geral"?
    //ex: buscar por autor, por título, ou só retornar tudo que tiver o que foi pesquisado
    public List<Referencia> buscarNoRepositorioGeral(String pesquisa) {
        List<Referencia> retornoBusca = repositorioReferencia.buscaReferencia(pesquisa);
        // usuario.setXp(100);
        //ver como implementar a adição de XP pro dono da referência utilizada
        return retornoBusca;
    }

    @Override
    @Transactional
    public List<Referencia> buscarNoRepositorioPrivado(String pesquisa) {
        List<Referencia> retornoBusca = repositorioReferencia.buscaReferencia(pesquisa);
        return retornoBusca;
    }

}
