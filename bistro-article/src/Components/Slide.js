import React, { Component } from 'react';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';
import config from '../config';


const BigH1 = styled.h1`
  font-size: 14rem;
  font-weight: 100;
`

const StyledSlide = styled.div`
  height: ${window.innerHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:not(:first-child){
    margin-top: ${config.slidePadding};
  }
`

class Slide extends Component {

  constructor() {
    super()
    this.handleWaypointEnter = this.handleWaypointEnter.bind(this)
  }

  handleWaypointEnter() {
    this.props.updateBackground(this.props.background)
  }

  render() {
    return (
      <Waypoint
        onEnter={this.handleWaypointEnter}
      >
        <StyledSlide>
        <BigH1>text</BigH1>
        </StyledSlide>
      </Waypoint>
    );
  }
}

export default Slide;