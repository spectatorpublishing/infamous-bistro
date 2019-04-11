import React, { Component } from 'react';
import styled from 'styled-components';
import Quote from './Quote.js';
import Slide from './Components/Slide';
import Background from './Components/Background';
<<<<<<< HEAD
import { createGlobalStyle } from 'styled-components'
import Question from './Components/Question';
=======
import { createGlobalStyle } from 'styled-components';
import ParentQuestion from './ParentQuestion.js'
>>>>>>> 340cd5fad464c9b5ee63b15d1339e0102387a884

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
  background: "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  component: <div>Test</div>
},
{
  background: "https://cdn.pixabay.com/photo/2019/02/16/01/18/dog-3999619_1280.jpg",
  component: <Quote width='60%' visibility='visible'
  text='My title used to be general manager, but I didn’t like that. I
  mean, I’m not managing anybody. I see these people every
  day and, even when we’re not at work, we’re still together and
  hanging out. We’re friends, but we’re also family. I’m not a
  manager of my family.'
  quote='- Jelena, Creative Director of Infamous Bistro '> </Quote>
},
{
  background: "https://c.pxhere.com/photos/b9/d8/dogs_puppies_play_two_group_in_the_free_nature_pet-652302.jpg!d",
  component: <Question>How many chucks could a woodchuck chuck?</Question>
            
},
{
  background: "http://www.dodlive.mil/files/2013/03/829140.jpg",
  component: <ParentQuestion></ParentQuestion>
}]

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
<<<<<<< HEAD
      
      <Quote width='60%' visibility='visible'>
      </Quote>
=======
>>>>>>> 340cd5fad464c9b5ee63b15d1339e0102387a884
    </div>
  }
}

export default App;
