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

const Backgrounds = [
  "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://cdn.pixabay.com/photo/2019/02/16/01/18/dog-3999619_1280.jpg",
  "https://c.pxhere.com/photos/b9/d8/dogs_puppies_play_two_group_in_the_free_nature_pet-652302.jpg!d",
  "http://www.dodlive.mil/files/2013/03/829140.jpg"
]

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
        Backgrounds.map(i => <Slide background={i} updateBackground={this.updateBackground}/>)
      }
      </div>
      <Quote width='60%' visibility='visible'>

        </Quote>
    </div>
  }
}

export default App;
