import React from 'react'
import styled from 'styled-components'
import {Mensagem} from './components/Mensagem.js'

const MainApp = styled.header`
background-color: #282c34;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
position: relative;
`
const LogoAppStyle = styled.h1`
position: absolute;
top: -10px;
left: 50%;
transform: translateX(-50%);
color: #fff;
font-size: 2rem;
`

const BodyChat = styled.div`
background-color: whitesmoke;
height: 80vh;
width: 60%;
display: flex;
flex-direction: column-reverse;
padding: 10px;
box-sizing: border-box;
`

class App extends React.Component {
  render () {
    return (<div>
      <MainApp>
        <LogoAppStyle> Seja bem vind@ ao Whatslab</LogoAppStyle>
        <BodyChat>
          <Mensagem/>
        </BodyChat>
      </MainApp>
      
      
      </div>
      
    );
  }


}
export default App;
