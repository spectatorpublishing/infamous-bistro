import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-size : 4.0rem;
  font-family: "redgar", sans-serif
  margin-left: auto;
  margin-right: auto;
  margin-top:16.0rem;
  color:white;
`
const Subheading = styled.div`
  font-family: redgar, sans-serif;
  font-size: 5.0rem;
  font:redgar;
  display: inline-block;
  color:white;
`

const Titles = styled.div`
  padding: 10.0rem;
  text-align: center;
`

const Button = styled.div`
  margin-top:12.0rem;
  text-align: center;
`
const Symbol = styled.div`
  font-family: "redgar", sans-serif;
  color: green;
  font-size:8rem;
  display: inline-block;
  margin-right:1.5rem;
  margin-top:-1.5rem;
  opacity:0.5;
`
const Img = styled.img`
  display: block;
  height: 1.0rem;
  width: 22.0rem;
  margin-left: 7.0rem;
  opacity:0.7;
`

class TitlePage extends Component {


  
    onClickButton(){
        window.scrollTo({
        top: 500,
        behavior: 'smooth'
        });
    }

  render() {
    return (
      <Titles>
          <Title>{this.props.title}</Title>
          <Img src="assets/Asset 8@10x.png"/>
          <Symbol>& </Symbol><Subheading>{this.props.subtitle}</Subheading>
          <Button>
            <img src="assets/arrow left.png" alt="Logo" style = {{ width : 50, height : 55, marginRight : -24}} onClick={this.onClickButton}/>
            <img src="assets/arrow.png" alt="Logo" style = {{ width : 20, height : 80}} onClick={this.onClickButton}/>
            <img src="assets/arrow right.png" alt="Logo" style = {{ width : 50, height : 55, marginLeft : -24 }}  onClick={this.onClickButton}/>
          </Button>
      </Titles>
    );
  }
}

export default TitlePage;
