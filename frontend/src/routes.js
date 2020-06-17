import React from 'react';
import Home from './components/Home';
import Cadastro from './components/Cadastro';
import Tarefas from './components/Tarefas';
import NotFound from './components/NotFound';

import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Home/>}/>
            <Route exact path="/register" component={() => <Cadastro/>}/>
            <Route exact path="/tasks" component={() => <Tarefas/>}/>
            <Route path="/404" component={() => <NotFound/>} />
            <Redirect to="/404" />
        </Switch>
    </BrowserRouter>
);

export default Routes;