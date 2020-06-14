import React from 'react';
import './css/home.css'

class Home extends React.Component{
    render(){
        return(
            <div className="home">
                    <div className="header">Tasks</div>
                    <div className="login">
                        <label>Login</label>
                        <form action="/" method="POST">
                            <input name="email" placeholder="Email"/>
                            <input name="password" placeholder="Senha" type="password"/>
                            <button type="submit">Entrar</button>
                            <p>Esqueci minha senha</p>
                            <p>Cadastrar-se</p>
                        </form>
                    </div>
            </div>
        )
    }
}

export default Home;