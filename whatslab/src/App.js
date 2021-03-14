import React from 'react'
import styled from 'styled-components'
import {Mensagem} from './components/Mensagem.js'



const MainApp = styled.header`
background:linear-gradient(45deg, blue, red);
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
font-family = robot;
`

const BodyChat = styled.div`
background-image: url('https://images.freeimages.com/images/premium/previews/3367/33671218-fun-doodle-robots-seamless-pattern-background.jpg');
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
        <LogoAppStyle> Comunique-se com WhatsLab</LogoAppStyle>
        <BodyChat>
          <Mensagem/>
        </BodyChat>
      </MainApp>
      
      
      </div>
      
    );
  }


}
export default App;
