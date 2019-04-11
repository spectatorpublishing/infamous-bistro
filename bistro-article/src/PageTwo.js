import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: inline-block;
    width: 80vw;
    font-size: 1.5rem;
    line-height: 3.5rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    color: white;

    @media (max-width: 600px) {
        width: 80vw;
        font-size: 1rem;
        line-height: 1.8rem;
    } 
`


const Highlight = styled.span`
    font-family: 'redgar';
    font-weight: 100;
    font-size: 2.8rem;
    line-height: 3.4rem;
    color: white;
    display: inline;
    margin: 0 10px;
    vertical-align: middle;
    white-space: normal;
    @media (max-width: 600px) {
        font-size: 1.3rem;
        line-height: 1.7rem;
        margin: 0 3px;
    }
`

export class SecondPage extends Component {
  render() {
    return (
        <Wrapper>
        <Wrapper>
        While you might expect darkness in a place described as “infamous,” in fact,
        Amsterdam Avenue’s newest opening, Infamous Bistro, has none of that. Instead,
        light pours in through a wall of windows and into the
        <Highlight>SPACIOUS & VERDANT NEW NEIGHBORHOOD SPOT.</Highlight> 
        <img alt="green-swoop" style={{"width":"50%"}} src="https://s3.amazonaws.com/spec-imagehosting/Asset+8%4010x.png"/>
        </Wrapper>
        <Wrapper>
        On a spring afternoon, the restaurant comes alive with sunshine and the smell of the fresh cut flowers that rest on every table. But the
        <Highlight>WARMTH OF THE SPACE </Highlight> 
        is not just the product of the windows and the interior design; it
        is the product of being in a place where the staff are deeply connected and loyal to
        each other. In other words,
        <Highlight>A FAMILY.</Highlight>
        </Wrapper>
        <img alt="green-swoop" style={{"width":"50%"}} src="https://s3.amazonaws.com/spec-imagehosting/Asset+8%4010x.png"/>
        </Wrapper>
    );
  }
}

export default SecondPage;