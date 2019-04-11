import React, { Component } from 'react';
import styled from 'styled-components';
import Quote from './Quote.js';
import Slide from './Components/Slide';
import Background from './Components/Background';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
     font-family: 'redgar';
     src: url('assets/Redgar.ttf');
  }
  @font-face {
      font-family: 'merriweatherlight';
      src: url('assets/MerriweatherSans-Light.otf')
  }
  @font-face {
      font-family: 'merriweatherbold';
      src: url('assets/MerriweatherSans-Bold.otf')
  }
  body {
    font-family: "redgar", sans-serif;
  }
`
const Data = [{
  background: "assets/E7f8Z_fw.jpeg",
  component: <div>Test</div>
},
{
  background: "assets/3WTtONsY.jpeg",
  component: <Quote></Quote>
},
{
  background: "assets/Jo8urKb0.jpeg",
  component: <div>Test</div>
},
{
  background: "assets/aHCUHV5A.jpeg",
  component: <div>Test</div>
},
{
  background: "assets/JxC-hreR.jpeg",
  component: <div>Test</div>
},
{
  background: "assets/MRsfi4Z4.jpeg",
  component: <div>Test</div>
},
{
  background: "assets/BEx70rMU.jpeg",
  component: <div>Test</div>
},
{
  background: "assets/F5TPvFN8.jpeg",
  component: <div>Test</div>
}]

const ShortTitle = styled.div`
  font-size : 1.0rem;
  padding: 0.5rem;
  margin-left: auto;
  margin-right: auto;
`
const LongTitle = styled.div`
  font-size: 3.0rem;
  width: 60vw;
  padding: 0.5rem;
  margin-left: auto;
  margin-right: auto;
`
const Description = styled.div`
  font-size: 1.5rem;
  width: 40vw;
  margin-left: auto;
  margin-right: auto;
`
const Titles = styled.div`
  padding: 10.0rem;
  text-align: center;
`

const Circle = styled.div`
  padding: 2.0rem;
  text-align: center;
`
const content = styled.div`
  padding: 10.0rem;
  text-align: center;
`

class App extends Component {

  constructor() {
    super()
    this.state = {
      background: null
    }
    this.updateBackground = this.updateBackground.bind(this)
  }
  
  onClickButton(){
    window.scrollTo(0, 1000);
  }

  updateBackground(i) {
    this.setState({background: i})
  }

  render() {
    return <div>
      <GlobalStyle/>
      <Background background={this.state.background}/>
      <div>
      {
        Data.map(i => <Slide background={i.background} updateBackground={this.updateBackground}>{i.component}</Slide>)
      }
      </div>
    </div>
  }
}

export default App;
