import React, { Component } from "react";
import styled from "styled-components";
import './global-styles.js';

const Wrapper = styled.div`
    display: inline-block;
    width: 70vw;
    font-size: 1rem;
    font-family: 'merriweatherlight';
    color: white;
`


const Highlight = styled.div`
    font-family: 'redgar';
    font-weight: 100;
    color: white;
`

export class SecondPage extends Component {
  render() {
    return (
        <Wrapper>
        While you might expect darkness in a place described as “infamous,” in fact,
        Amsterdam Avenue’s newest opening, Infamous Bistro, has none of that. Instead,
        light pours in through a wall of windows and into the
        <Highlight>SPACIOUS & VERDANT NEW NEIGHBORHOOD SPOT</Highlight>
        On a spring afternoon, the restaurant comes alive
        with sunshine and the smell of the fresh cut flowers that rest on every table. But the
        <Highlight>WARMTH OF THE SPACE </Highlight> 
        is not just the product of the windows and the interior design; it
        is the product of being in a place where the staff are deeply connected and loyal to
        each other. In other words,
        <Highlight>A FAMILY.</Highlight>
        </Wrapper>
    );
  }
}

export default SecondPage;