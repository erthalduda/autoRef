import React from "react";

import Login from "../views/login";
import Home from '../views/home';
import CadastroUsuario from "../views/cadastro-usuario";
import Referencias from "../views/referencias";


import { Route, Switch, HashRouter } from 'react-router-dom'
import Monografia from "../views/monografia";
import Website from "../views/website";
import Artigo from "../views/artigo";

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


function Rotas() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/cadastro" component={CadastroUsuario} />
                <Route path="/referencias" component={Referencias} />
                <Route path="/faq" component={Faq} />
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
                <Route path="/colecao_periodica_eletronica" component={ColecaoPeriodicaMeioEletronico} />
                <Route path="/cadastro_colecao" component={CadastroColecao}/>
                

            </Switch>
        </HashRouter>
    )
}

export default Rotas