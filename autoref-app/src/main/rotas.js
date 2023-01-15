import React from "react";

import Login from "../views/login";
import Home from '../views/home';
import CadastroUsuario from "../views/cadastro-usuario";

import { Route, Switch, HashRouter } from 'react-router-dom'

function Rotas() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/cadastro" component={CadastroUsuario} />

            </Switch>
        </HashRouter>
    )
}

export default Rotas