import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: inline-block;
    width: 51vw;
    font-size: 1.5rem;
    line-height: 3.5rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    color: white;

    @media (max-width: 600px) {
        width: 90vw;
    } 
`


const Highlight = styled.span`
    font-family: 'redgar';
    font-weight: 100;
    font-size: 2.8rem;
    color: white;
    display: inline-block;
    margin: -5px 10px;
    vertical-align: middle;
    white-space: normal;
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
        <img style={{"width":"50%"}} src="./assets/Asset 8@10x.png"/>
        </Wrapper>
        <Wrapper>
        On a spring afternoon, the restaurant comes alive with sunshine and the smell of the fresh cut flowers that rest on every table. But the
        <Highlight>WARMTH OF THE SPACE </Highlight> 
        is not just the product of the windows and the interior design; it
        is the product of being in a place where the staff are deeply connected and loyal to
        each other. In other words,
        <Highlight>A FAMILY.</Highlight>
        </Wrapper>
        <img style={{"width":"50%"}} src="./assets/Asset 8@10x.png"/>
        </Wrapper>
    );
  }
}

export default SecondPage;