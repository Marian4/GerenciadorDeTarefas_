import React from 'react';
import Home from './components/Home';
import Cadastro from './components/Cadastro';
import Tarefas from './components/Tarefas';
import NotFound from './components/NotFound';
import AccessDenied from './components/AccessDenied'
import NovaTarefa from './components/NovaTarefa'

import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

const isAuthenticated = () => false;
const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route
        {...rest}
        render = {props =>
            isAuthenticated()?(
                <Component {...props}/>
            ) : (
                <Redirect to={{pathname:"/403", state: {from: props.location}}}/>
            )
        }
    />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Home/>}/>
            <Route exact path="/register" component={() => <Cadastro/>}/>
            <PrivateRoute exact path="/tasks" component={() => <Tarefas/>}/>
            <PrivateRoute exact path="/newTask" component={() => <NovaTarefa/>}/>
            <Route path="/403" component={() => <AccessDenied/>} />
            <Route path="/404" component={() => <NotFound/>} />
            <Redirect to="/404" />
        </Switch>
    </BrowserRouter>
);

export default Routes;