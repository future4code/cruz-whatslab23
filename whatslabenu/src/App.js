import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import {Mensagem} from './components/Mensagem.js'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

const MainApp = styled.header`
background-color: #282c34;
min-height: 100vh;
width: 100%;
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
top: 0px;
/* left: 50%;
transform: translateX(-50%); */
color: #fff;
font-size: 2rem;
`

class App extends React.Component {

   render () {
    return (<div>
      <GlobalStyle/>
      <MainApp>
        <LogoAppStyle> Seja bem vind@ ao Whatslab</LogoAppStyle>
        <Mensagem />
      </MainApp>
      
      
      </div>
      
    );
  }


}
export default App;
