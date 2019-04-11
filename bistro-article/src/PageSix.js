import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: inline-block;
    width: 51vw;
    font-size: 1.8rem;
    line-height: 3.8rem;
    font-family: 'Roboto';
    color: white;
    text-align: center;
    @media (max-width: 600px) {
        width: 80vw;
        font-size: 1.3rem;
        line-height: 2.1rem;
    } 
`


const Highlight = styled.span`
    font-family: 'redgar';
    font-weight: 100;
    font-size: 3.1rem;
    line-height: 3.7rem;
    color: #98d8a1;
    display: inline;
    margin: 0 10px;
    vertical-align: middle;
    white-space: normal;
    @media (max-width: 600px) {
        font-size: 1.5rem;
        line-height: 1.9rem;
        margin: 0 3px;
    }
`

export class SixthPage extends Component {
  render() {
    return (
        <Wrapper>
        <Highlight>Read below</Highlight> 
        for five key questions with the chef, and a bonus interview with the creator of Infamous Bistro’s cocktail
menu, Milos Zica.
        </Wrapper>
    );
  }
}

export default SixthPage;