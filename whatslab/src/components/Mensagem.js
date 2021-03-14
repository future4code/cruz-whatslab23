import React from "react"
import styled from "styled-components"

const  Paragraph = styled.p`
color: black;
`

export class Mensagem extends React.Component{
    
    state = {
        mensagem:[], 
        imputUsuario : "",
        imputMensagem : "",
        contador : "",
    }

    alteraNome = (event) => {
        this.setState({imputUsuario:event.target.value})
    }

    alteraEnvioMensagem = (event) => {
        this.setState({imputMensagem:event.target.value})
        if (event.key === "Enter") {
            this.botaoEnviar();
        }
    }

    botaoEnviar = () => {
       const novaMensagem = {
           nome: this.state.imputUsuario,
           envioMsg: this.state.imputMensagem,
       
       }

       const mensagemAcumulada = [...this.state.mensagem, novaMensagem]
       this.setState({ mensagem: mensagemAcumulada, imputMensagem: '' })

        if(this.state.contador === 0){
            this.setState(contador:contador + 1)
        }else(
            this.setState(contador:contador - 1))
    }
    
    apertaEnter = (event) => {
        if (event.key === "Enter") {
            this.botaoEnviar();
        }
    }

    render() {
    
        const imprimir = this.state.mensagem.map((msg) =>{
            return <Paragraph><strong>{msg.nome}</strong>: {msg.envioMsg}</Paragraph>

        })
    
    return (<div>
                <div>{imprimir}</div>
                <input 
                onChange={this.alteraNome}
                placeholder={'Digite seu nome'}/>
                <input 
                onChange={this.alteraEnvioMensagem}
                onKeyDown={this.apertaEnter}
                value={this.state.imputMensagem}
                placeholder={'Digite sua mensagem'}
                />
                <button onClick={this.botaoEnviar}>Enviar</button>
            </div>)
    }
}