import React from "react"
import styled from "styled-components"

const SendMessage = styled.div`
max-width: 50%;
background-color: blue;
`

const BodyChat = styled.div`
background-color: whitesmoke;
height: 80vh;
width: 60%;
display: flex;
flex-direction: column-reverse;
padding: 10px;
box-sizing: border-box;
overflow-y: auto;
`
const AreaInput = styled.div`
display: flex;
background-color:blue;
`
const InputName = styled.input`
width: 100px;
`
const InputMessage = styled.input`
flex: 1;
`

export class Mensagem extends React.Component{
    
    state = {
        mensagem:[], 
        imputUsuario : "",
        imputMensagem : ""
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
           envioMsg: this.state.imputMensagem
       }

       const mensagemAcumulada = [novaMensagem, ...this.state.mensagem]
       this.setState({ mensagem: mensagemAcumulada, imputMensagem: '' })
    }
    
    apertaEnter = (event) => {
        if (event.key === "Enter") {
            this.botaoEnviar();
        }
    }

    deletarMensagem = (msgDel) => {
        if (window.confirm('Tem certeza que deseja apagar a mensagem?')) {
            const apagarMsg = [...this.state.mensagem]
            const msgApagadaFiltro = apagarMsg.filter((msg) => {
                return msg.envioMsg !== msgDel
            })

            this.setState({ mensagem: msgApagadaFiltro })
        }
    }

    render() {
    
        const imprimir = this.state.mensagem.map((msg) =>{
            return <SendMessage onDoubleClick={() => this.deletarMensagem(msg.envioMsg)}><div><div>{msg.nome}: {msg.envioMsg}</div></div></SendMessage>

        })
    
    return (<BodyChat>
                
                <AreaInput>
                    <InputName 
                    onChange={this.alteraNome}
                    placeholder={'Digite seu nome'}/>
                    <InputMessage 
                    onChange={this.alteraEnvioMensagem}
                    onKeyDown={this.apertaEnter}
                    value={this.state.imputMensagem}
                    placeholder={'Digite sua mensagem'}
                    />
                    <button onClick={this.botaoEnviar}>Enviar</button>
                </AreaInput>
                {imprimir}
            </BodyChat>)
    }
}