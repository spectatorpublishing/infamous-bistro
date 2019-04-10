import React, { Component } from 'react';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';
import config from '../config';

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
        text
        </StyledSlide>
      </Waypoint>
    );
  }
}

export default Slide;