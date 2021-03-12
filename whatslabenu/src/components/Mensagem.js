import React from "react"

class Mensagem extends React.Component{
    state = {
        mensagem:[{
            nome: "" ,
            envioMsg: "" 
        }], 
        
        imputUsuario : "",
        imputMensagem : ""
        
    }

   

    onChangeNome = (event) => {
        this.setState({imputUsuario:event.target.value})
    }

    onChangeEnvioMensagem = (event) => {
        this.setState({imputMensagem:event.target.value})
    }

    botaoEnviar = () => {
       const novaMensagem = {
           nome: this.state.imputUsuario,
           envioMsg: this.state.imputMensagem
       }

       const mensagemAcumulada = [novaMensagem, ...this.state.mensagem]
       this.setState({mensagem:mensagemAcumulada})
      
    }
      
    render() {
        const imprimir = this.state.mensagem.map((msg) =>{
            return <p>{msg.nome} - {msg.envioMsg}</p>

        })
      


    
    return (<div>{imprimir}</div>)
}
}
export default Mensagem