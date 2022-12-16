package autoref.tcc.autoref.services.implementation;

import org.springframework.stereotype.Service;

import autoref.tcc.autoref.model.Colecao;
import autoref.tcc.autoref.model.Referencia;
import autoref.tcc.autoref.repositories.ColecaoRepository;
import autoref.tcc.autoref.services.ColecaoService;

@Service
public class ColecaoServiceImplementation implements ColecaoService {

    private ColecaoRepository repositorioColecao;

    public ColecaoServiceImplementation(ColecaoRepository repositorioColecao){
        this.repositorioColecao = repositorioColecao;
    }

    @Override
    public Referencia adicionaReferencia(Referencia referencia) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Colecao atualizaColecao(Colecao colecao) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Colecao cadastraColecao(Colecao colecao) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void deletaColecao(Colecao colecao) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void deletaReferencia(Referencia referencia) {
        // TODO Auto-generated method stub
        
    }
    
}
