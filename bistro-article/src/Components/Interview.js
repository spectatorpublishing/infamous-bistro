import React, { Component } from 'react';
import styled from 'styled-components';
import config from '../config';
import Quote from '../Quote';

let Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`

let Column = styled.div`
  width: 40%;
  text-align: left;
`

let StyledQuestion = styled.div`
  font-size: 1.1rem;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  line-height: 1.4rem;
  color: white;
  display: inline-block;
  position: relative;
  padding: 0 .5rem;

  &:not(:first-child){
    margin-top: 4rem;
  }

  ${config.mobileBreakpoint} {
    max-width: 70vw;
    margin: 2rem auto;
    font-size: 1rem;
    text-align: center;
    display: block;
  }

  ${config.tabletBreakpoint} {
    max-width: 70vw;
    font-size: 2rem;
    line-height: 3rem;
    margin: 3rem auto;
    text-align: center;
    display: block;
  }

  &.active {
    color: #98d8a1;
  }

  &::after {
    content: ' ';
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    background: url("https://s3.amazonaws.com/spec-imagehosting/Asset+8%4010x.png");
    background-position: center center;
    background-size: 100% 100%;
    height: .5rem;
    bottom: -1rem;
    left: 0;
    background-repeat: no-repeat;
    opacity: 0.7;
  }
`

let QuoteWrapper = styled.div`
  display: block;
  max-width: 70vw;
  margin: 0 auto;
`

class Question extends Component {
  constructor() {
    super()
    this.handleSelect = this.handleSelect.bind(this)
    this.questionRef = React.createRef();
  }

  handleSelect() {
    if (window.innerWidth < 1000) {
      this.questionRef.current.scrollIntoView()
    }
    this.props.handleSelect(this.props.index)
  }

  render() {
    return <StyledQuestion ref={this.questionRef} className={this.props.active ? "active" : ""} onMouseEnter={this.handleSelect} onClick={this.handleSelect}>{this.props.children}</StyledQuestion>
  }
}

class Interview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      response: this.props.data[0].response,
      active: 0
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  componentDidMount() {
      window.addEventListener('resize', this.handleResize);
      this.prevWidth = window.innerWidth
  }

  componentWillUnmount(){
      window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    if (this.prevWidth > window.innerWidth && window.innerWidth < 1000) {
      this.forceUpdate()
    }
    else if (this.prevWidth < window.innerWidth && window.innerWidth >= 1000) {
      this.forceUpdate()
    }
  };

  handleSelect(i) {
    this.setState({
      response: this.props.data[i].response,
      active: i
    })
  }

  render() {
    if (window.innerWidth < 1000) {
      return <div>
        {
          this.props.data.map((i, index) => <div key={index}>
            <Question
              index={index}
              handleSelect={this.handleSelect}
              onClick={this.handleSelect}
              active={true}
            >
              {i.question}
            </Question>

            {
              <QuoteWrapper><Quote width='100%' scale='1' visibility='visible'
              text={this.state.response}
              quote={this.props.quote}> </Quote></QuoteWrapper>
            }
          </div>)
        }
      </div>
    }
    return <Container>
      <Column>
      {
        this.props.data.map((i, index) => <Question
          key={index}
          index={index}
          handleSelect={this.handleSelect}
          onClick={this.handleSelect}
          active={index === this.state.active}
        >
          {i.question}
        </Question>)
      }
      </Column>
      <Column>
        <Quote width='80%' scale='.6' visibility='visible'
  text={this.state.response}
  quote={this.props.quote}> </Quote>
      </Column>
    </Container>
  }
}

export default Interview
