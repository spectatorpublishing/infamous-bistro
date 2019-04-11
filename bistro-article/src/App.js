import React, { Component } from 'react';
import styled from 'styled-components';
import Question from 'Question.js';

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
  
  onClickButton(){
    window.scrollTo(0, 1000);
  }

  render() {
    return (
      <Titles>
        <ShortTitle>HARMONY. MASTERED FROM CHAOS.</ShortTitle>
        <LongTitle>In Miami, a Chef Sources Locally for His South Asian Desserts</LongTitle>
        <Description>Florida’s tropical monsoon climate helps Niven Patel master the sweet side of his modern Indian menu.</Description>
        <Circle><img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Circle_-_black_simple.svg" alt="Logo" width={50} padding={100} onClick={this.onClickButton}/></Circle>
        <div ref={this.myRef}>hiiiiii</div> >
      </Titles>

    );
  }
}

export default App;
