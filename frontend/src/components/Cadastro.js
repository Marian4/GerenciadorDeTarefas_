import React from 'react';
import './css/cadastro.css'

class Cadastro extends React.Component{
    render(){
        return(
            <div className="cadastro">
                <div className="headerCadastro"><spam id="spam">Tasks</spam></div>
                    <div>
                        <form className="formCadastro">
                            <center><h1>Cadastre-se</h1></center>
                            <label>Nome</label>
                            <input id="fc" type="text" name="name"/>
                            <label>Email</label>
                            <input id="fc" type="text" name="email"/>
                            <label>Senha</label>
                            <input id="fc" type="password" name="password"/>
                            <button id="bCadastro"type="submit">Cadastrar</button>
                        </form>
                    </div>
            </div>
        );
    }
}

export default Cadastro;