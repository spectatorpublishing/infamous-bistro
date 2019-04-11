import React, { Component } from 'react';
import styled from 'styled-components';

const StyledBackground = styled.div`
  height: ${props => props.height}px;
  width: 100%;
  position: fixed;
  background: url("${props => props.background}");
  filter: ${props => props.filter};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: background 1s;
`

class Background extends Component {
  constructor() {
    super()
    this.state = {
      height: window.innerHeight
    }
  }

  componentDidMount() {
      window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount(){
      window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
      this.setState({height: window.innerHeight})
  };

  render() {
    return (
      <StyledBackground {...this.state} {...this.props}/>
    );
  }
}

export default Background;