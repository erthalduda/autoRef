package autoref.tcc.autoref.services.implementation;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import autoref.tcc.autoref.api.dtos.response.ReferenciaResponse;
import autoref.tcc.autoref.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import autoref.tcc.autoref.exceptions.ExcecoesAutoref;
import autoref.tcc.autoref.model.*;
import autoref.tcc.autoref.repositories.*;
import autoref.tcc.autoref.services.ReferenciaService;

@Service
public class ReferenciaServiceImplementation implements ReferenciaService {

    private ReferenciaRepository repositorioReferencia;
    private UsuarioRepository repositorioUsuario;

    @Autowired
    private LoginService loginService;

    public ReferenciaServiceImplementation(ReferenciaRepository repositorioReferencia,
            UsuarioRepository repositorioUsuario) {
        this.repositorioReferencia = repositorioReferencia;
        this.repositorioUsuario = repositorioUsuario;
    }

    @Override
    @Transactional
    public Referencia cadastraReferencia(Referencia referencia) {

        Usuario usuario = loginService.getLoggedUsuario();

        int quantidadeReferencias = repositorioUsuario.referenciasPorUsuario(usuario.getIdUsuario());

        if (quantidadeReferencias == 10) {
            usuario.setXp(500);
        }

        if (quantidadeReferencias >= 20) {
            usuario.setXp(1500);
            usuario.setPossuiAcademicoNovato(true);
        }

        if (quantidadeReferencias >= 50) {
            usuario.setPossuiAcademicoEsforcado(true);
        }

        if (quantidadeReferencias >= 100) {
            usuario.setPossuiAcademicoMestre(true);
        }

        usuario.setXp(100);
        referencia.setUsuario(usuario);
        return repositorioReferencia.save(referencia);
    }

    @Override
    public Referencia encontrarPorId(Integer id) {
        Optional<Referencia> referenciaPorId = repositorioReferencia.findById(id);
        if (!referenciaPorId.isPresent()) {
            throw new ExcecoesAutoref("Referência não encontrada.");
        }
        return referenciaPorId.get();
    }

    @Override
    public List<ReferenciaResponse> buscarNoRepositorioGeral(String pesquisa) {

        List<Referencia> retornoBusca = repositorioReferencia.buscaReferenciaRepositorioGeral(pesquisa);
        return retornoBusca
                .stream()
                .map(referencia -> new ReferenciaResponse(referencia.getUsuario().getIdUsuario(),
                        referencia.getFormatoFinal(), referencia.getId(),
                        referencia.getCitacaoDireta(), referencia.getCitacaoIndireta()))
                .collect(Collectors.toList());
    }

    // @Override
    // @Transactional
    // public List<Referencia> buscarEspecificaNoRepositorioPrivado(String pesquisa,
    // Integer idUsuario) {
    // List<Referencia> retornoBusca =
    // repositorioReferencia.buscaReferenciaEspecificaPrivado(pesquisa, idUsuario);
    // return retornoBusca;
    // }

    @Override
    @Transactional
    public List<ReferenciaResponse> buscarTodasNoRepositorioPrivado() {
        Usuario usuario = loginService.getLoggedUsuario();

        List<Referencia> retornoBusca = repositorioReferencia.buscaTodasReferenciasPrivado(usuario.getIdUsuario());

        return retornoBusca
                .stream()
                .map(referencia -> new ReferenciaResponse(referencia.getUsuario().getIdUsuario(),
                        referencia.getFormatoFinal(), referencia.getId(),
                        referencia.getCitacaoDireta(), referencia.getCitacaoIndireta()))
                .collect(Collectors.toList());

    }
}
