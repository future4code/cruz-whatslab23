import React from 'react'
import styled from 'styled-components'

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

const Paragraph = styled.p`
color: #1a1a1a;
margin: 5px 10px;
`

class App extends React.Component {
  render () {
    return (
      <MainApp>
        <LogoAppStyle>Bem vind@ ao WhatsLab!</LogoAppStyle>
        <BodyChat>
          <Paragraph>Victor: e ai?</Paragraph>
          <Paragraph>Angelo: e ai?</Paragraph>
        </BodyChat>
      </MainApp>
    );
  } 
}
export default App;
