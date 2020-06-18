import React from 'react';
import './css/NovaTarefa.css'

class NovaTarefa extends React.Component{
    render(){
        return(
            <div className="cadastro">
                <div className="headerCadastro"><spam id="spam">Tasks</spam></div>
                    <div>
                        <form className="formCadastro">
                            <center><h1>Nova Tarefa</h1></center>
                            <label>Nome</label>
                            <input id="fc" type="text" name="name"/>
                            <label>Prioridade</label>
                            <select id="fc" name="priority">
                                <option value="alta">Alta</option>
                                <option value="baixa">Baixa</option>
                            </select>
                            <button id="bCadastro"type="submit">Cadastrar</button>
                        </form>
                    </div>
            </div>
        );
    }
}

export default NovaTarefa;