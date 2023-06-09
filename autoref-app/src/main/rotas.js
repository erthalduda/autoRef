import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";


import Login from "../views/login";
import Home from "../views/home";
import CadastroUsuario from "../views/cadastro-usuario";
import Referencias from "../views/referencias";

// import ColecoesUsuarioDois from "../views/colecoes-usuario-teste";

import PaginaInicial from "../views/pagina-inicial";
import Monografia from "../views/monografia";
import Website from "../views/website";
import Artigo from "../views/artigo";
import ColecoesUsuario from "../views/colecoes-usuario";
import Periodico from "../views/periodico";
import MonoOpcoes from "../views/mono-opcoes";
import ParteMonografia from "../views/parte-monografia";
import MonografiaOnline from "../views/monografia_online";
import MonografiaEletronica from "../views/monografia-eletronico";
import TrabalhoAcademico from "../views/trabalho-academico";
import ColecaoPeriodica from "../views/colecao-periodica";
import PartePeriodica from "../views/parte-periodica";
import ColecaoPeriodicaMeioEletronico from "../views/colecao-periodica-meio-eletronico";
import Faq from "../views/faq";
import CadastroColecao from "../views/cadastro-colecao";
import RepositorioGeral from "../views/repositorio-geral";
import RepositorioPrivado from "../views/repositorio-privado";
import Ranking from "../views/ranking";
import InfosRanking from "../views/infos-ranking";

function Rotas() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PaginaInicial} />

        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/cadastro" component={CadastroUsuario} />
        <Route path="/referencias" component={Referencias} />
        <Route path="/colecoes" component={ColecoesUsuario} />
        {/* <Route path="/colecoesDois" component={ColecoesUsuarioDois}/> */}
        <Route path="/faq" component={Faq} />
        <Route path="/infos-ranking" component={InfosRanking}/>
        <Route path="/monografia" component={Monografia} />
        <Route path="/website" component={Website} />
        <Route path="/artigo" component={Artigo} />
        <Route path="/trabalho" component={TrabalhoAcademico} />
        <Route path="/periodico" component={Periodico} />
        <Route path="/opcoes_mono" component={MonoOpcoes} />
        <Route path="/parte_monografia" component={ParteMonografia} />
        <Route path="/monografia_online" component={MonografiaOnline} />
        <Route path="/monografia_eletronica" component={MonografiaEletronica} />
        <Route path="/colecao_periodica" component={ColecaoPeriodica} />
        <Route path="/parte_periodica" component={PartePeriodica} />
        <Route
          path="/colecao_periodica_eletronica"
          component={ColecaoPeriodicaMeioEletronico}
        />
        <Route path="/cadastro_colecao" component={CadastroColecao} />
        <Route path="/repositorio_geral" component={RepositorioGeral} />
        <Route path="/repositorio_privado" component={RepositorioPrivado} />
        <Route path="/ranking" component={Ranking} />
      </Switch>
    </BrowserRouter>
  );
}

export default Rotas;
