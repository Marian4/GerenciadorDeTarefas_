import React from 'react';
import './css/home.css'

class Home extends React.Component{
    render(){
        return(
            <div className="home">
                    <div className="header"><spam id="spam">Tasks</spam></div>
                    <div className="login">
                        <label>Login</label>
                        <form action="/" method="POST" className="formLogin">
                            <input name="email" placeholder="Email"/>
                            <input name="password" placeholder="Senha" type="password"/>
                            <button type="submit">Entrar</button>
                            <a href="/register">Esqueci minha senha</a>
                            <a href="/register">Cadastrar-se</a>
                        </form>
                    </div>
            </div>
        )
    }
}

export default Home;