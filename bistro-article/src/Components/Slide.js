import React, { Component } from 'react';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';
import config from '../config';


const StyledSlide = styled.div`
  min-height: ${window.innerHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  &:not(:first-child){
    margin-top: ${config.slidePadding};
  }
`

class Slide extends Component {

  constructor() {
    super()
    this.handleWaypointEnter = this.handleWaypointEnter.bind(this)
    this.handleWaypointLeave = this.handleWaypointLeave.bind(this)
  }

  handleWaypointEnter(i) {
    if (i.currentPosition !== "below")
      this.props.updateBackground(this.props.index)
  }

  handleWaypointLeave(i) {
    if (i.currentPosition === "below")
      this.props.updateBackground(this.props.index - 1)
  }

  render() {
    return (
      <Waypoint
        onEnter={this.handleWaypointEnter}
        onLeave={this.handleWaypointLeave}
        fireOnRapidScroll={true}
      >
        <StyledSlide>
        {this.props.children}
        </StyledSlide>
      </Waypoint>
    );
  }
}

export default Slide;