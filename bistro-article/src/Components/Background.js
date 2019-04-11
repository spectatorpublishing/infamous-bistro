import React, { Component } from 'react';
import styled from 'styled-components';

const StyledBackground = styled.div`
  height: ${window.innerHeight}px;
  width: 100vw;
  position: fixed;
  background: url("${props => props.background}");
  filter: ${props => props.filter};
  background-repeat: no-repeat;
  background-size: cover;
  transition: background 1s;
`

class Background extends Component {

  render() {
    return (
      <StyledBackground {...this.props}/>
    );
  }
}

export default Background;