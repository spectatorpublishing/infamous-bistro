import React, { Component } from 'react';
import Quote from './Quote.js';
import Slide from './Components/Slide';
import Background from './Components/Background';
import TitlePage from './Components/TitlePage';
import { createGlobalStyle } from 'styled-components';
import ParentQuestion from './ParentQuestion.js';

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
    margin: 0;
  }
`
const Data = [{
  component: <TitlePage title={"ROOTS, INFLUENCES,"} subtitle={"GOOD FOOD"}/>
  background: "assets/E7f8Z_fw.jpeg",
  filter: "brightness(50%)",
},
{
  background: "assets/3WTtONsY.jpeg",
  filter: "brightness(50%)",
  component: <Quote width='60%' visibility='visible'
  text='My title used to be general manager, but I didn’t like that. I
  mean, I’m not managing anybody. I see these people every
  day and, even when we’re not at work, we’re still together and
  hanging out. We’re friends, but we’re also family. I’m not a
  manager of my family.'
  quote='- Jelena, Creative Director of Infamous Bistro '> </Quote>
},
{
  background: "assets/Jo8urKb0.jpeg",
  filter: "brightness(50%)",
  component: <div>Test</div>
},
{
  background: "assets/aHCUHV5A.jpeg",
  filter: "brightness(50%)",
  component: <div>Test</div>
},
{
  background: "assets/JxC-hreR.jpeg",
  filter: "brightness(50%)",
  component: <ParentQuestion></ParentQuestion>
},
{
  background: "assets/MRsfi4Z4.jpeg",
  filter: "brightness(50%)",
  component: <div>Test</div>
},
{
  background: "assets/BEx70rMU.jpeg",
  filter: "brightness(50%)",
  component: <div>Test</div>
},
{
  background: "assets/F5TPvFN8.jpeg",
  filter: "brightness(50%)",
  component: <div>Test</div>
}]

class App extends Component {

  constructor() {
    super()
    this.state = {
      background: []
    }
    this.updateBackground = this.updateBackground.bind(this)
  }
  
  onClickButton(){
    window.scrollTo(0, 1000);
  }

  updateBackground(i) {
    this.setState({
      background: Data[i]
    })
    if (i > 1 && !Data[i - 1].preloaded) {
      let img = new Image()
      img.src = Data[i - 1].background
      Data[i - 1].preloaded = true
    }
    if (i < Data.length - 1 && !Data[i + 1].preloaded) {
      let img = new Image()
      img.src = Data[i + 1].background
      Data[i + 1].preloaded = true
    }
  }

  render() {
    return <div>
      <GlobalStyle/>
      <Background {...this.state.background}/>
      <div>
      {
        Data.map((i, index) => <Slide key={index} index={index} updateBackground={this.updateBackground}>{i.component}</Slide>)
      }
      </div>
    </div>
  }
}

export default App;
