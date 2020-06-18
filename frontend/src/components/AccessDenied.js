import React from 'react';
import './css/erro.css'

class AccessDenied extends React.Component{
    render(){
        return(
            <div className="NotFound">
                    <div className="mensagem">Acesso Negado</div>
            </div>
        )
    }
}

export default AccessDenied;