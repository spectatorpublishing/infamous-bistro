import React, { Component } from 'react';
import styled from 'styled-components';
import config from '../config';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

const Title = styled.div`
  font-size : 4.0rem;
  font-family: "redgar", sans-serif;
  font-weight: 100;
  color:white;

  ${config.mobileBreakpoint} {
    font-size: 2rem;
  }
`
const Subheading = styled.div`
  font-family: redgar, sans-serif;
  font-size: 5.0rem;
  font:redgar;
  display: inline-block;
  color:white;

  ${config.mobileBreakpoint} {
    font-size: 2.5rem;
  }
`

const Titles = styled.div`
  text-align: center;
`

const Button = styled.div`
  position: fixed;
  bottom: 1rem;
  display: block;
  left: 0;
  text-align: center;
  width: 100%;
  z-index: 10;
  transition-duration: 0.5s;
  @media (max-width: 600px) {
    display: none;
  }
`
const Symbol = styled.div`
  font-family: "redgar", sans-serif;
  color: rgb(175, 212, 168);
  font-size:8rem;
  display: inline-block;
  margin-right:1.5rem;
  margin-top:-1.5rem;

  ${config.mobileBreakpoint} {
    font-size: 4rem;
    margin-right:.75rem;
    margin-top:-.75rem;
  }
`
const Img = styled.img`
  display: block;
  height: 1.0rem;
  width: 22.0rem;
  margin-left: 7.0rem;
  opacity:0.7;

  ${config.mobileBreakpoint} {
    height: .5rem;
    width: 11.0rem;
    margin-left: 3.5rem;
  }
`

class TitlePage extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

    handleClick(){
      window.scrollBy({
        top: (window.innerHeight+(10 * parseFloat(getComputedStyle(document.documentElement).fontSize))),
        behavior: 'smooth'
      });
    }

    componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
}

componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}

    handleScroll(event) {
            if (window.innerHeight + window.scrollY > (document.body.clientHeight - 300)) {
            document.getElementById('button').style.opacity='0';
        }
          if (window.innerHeight + window.scrollY < (document.body.clientHeight-300)) {
            document.getElementById('button').style.opacity='1';
        }
  }

  render() {
    return (
      <div>
        <Titles>
            <Title>{this.props.title}</Title>
            <Img src="https://s3.amazonaws.com/spec-imagehosting/Asset+8%4010x.png"/>
            <Symbol>& </Symbol><Subheading>{this.props.subtitle}</Subheading>
        </Titles>
        <Button id="button">
          <img src="https://s3.amazonaws.com/spec-imagehosting/combined+arrow.png" alt="Logo" onClick={this.handleClick}/>
        </Button>
      </div>
    );
  }
}

export default TitlePage;
