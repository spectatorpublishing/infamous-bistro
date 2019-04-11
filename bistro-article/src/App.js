import React, { Component } from 'react';
import styled from 'styled-components';
<<<<<<< HEAD
import Question from 'Question.js';
=======
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
>>>>>>> b100c5d867a0ac3308b39be740d78a606fb28627

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
    /*return (
      <Titles>
        <ShortTitle>HARMONY. MASTERED FROM CHAOS.</ShortTitle>
        <LongTitle>In Miami, a Chef Sources Locally for His South Asian Desserts</LongTitle>
        <Description>Florida’s tropical monsoon climate helps Niven Patel master the sweet side of his modern Indian menu.</Description>
        <Circle><img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Circle_-_black_simple.svg" alt="Logo" width={50} padding={100} onClick={this.onClickButton}/></Circle>
        <div ref={this.myRef}>hiiiiii</div> >
      </Titles>

    );
    */
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
