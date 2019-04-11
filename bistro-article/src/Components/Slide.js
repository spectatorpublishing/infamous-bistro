import React, { Component } from 'react';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';
import config from '../config';


const StyledSlide = styled.div`
  min-height: ${props => props.height}px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  &:not(:first-child){
    margin-top: ${config.slidePadding};
  }
  ${props => props.slideStyle ? props.slideStyle : ""}
`

class Slide extends Component {
  constructor() {
    super()
    this.state = {
      height: window.innerHeight
    }
    this.handleWaypointEnter = this.handleWaypointEnter.bind(this)
    this.handleWaypointLeave = this.handleWaypointLeave.bind(this)
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
        <StyledSlide {...this.state} slideStyle={this.props.slideStyle}>
        {this.props.children}
        </StyledSlide>
      </Waypoint>
    );
  }
}

export default Slide;