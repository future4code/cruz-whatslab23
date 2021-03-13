import React from "react"

export class Mensagem extends React.Component{
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
    
    return (<div>
        <input onChange={this.onChangeNome}/>
      <input onChange={this.onChangeEnvioMensagem}/>
      <button onClick={this.botaoEnviar}>CLick</button>
        <div>{imprimir}</div>
        </div>)
    }
}