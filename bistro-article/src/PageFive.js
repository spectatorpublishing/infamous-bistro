import React, { Component } from "react";
import styled from "styled-components";
import './global-styles.js';

const Wrapper = styled.div`
    display: inline-block;
    width: 51vw;
    font-size: 1.5rem;
    line-height: 3.5rem;
    font-family: 'Roboto';
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

export class FifthPage extends Component {
  render() {
    return (
        <Wrapper>
        <Wrapper>
        Chef/owner Zivko Radojcic grew up in Belgrade, Serbia’s capital, and
        <Highlight> CAME FROM a family of pastry chefs and cooks. </Highlight>
        <img style={{"width":"50%", "float":"right","display":"block"}} src="./assets/Asset 8@10x.png"/>
        </Wrapper>
        <Wrapper>
        One of his aunts was, in fact, a pastry chef for Tito, the Former President of Yugoslavia. His grandmother owned a restaurant in France before moving to Serbia. And though cooking is in his blood and in his bones, Radojcic had not always planned to be a chef. Instead, his first passion was soccer, which he played throughout culinary school and then played professionally after he graduated. But, as a goalie, he had to exert himself and sustain injuries often, and he decided to keep playing soccer, but only as a hobby. After that, he worked in restaurants in Belgrade, and then in New York,
        <Highlight> making a name for himself in a new city. </Highlight>
        <img style={{"width":"50%","float":"right"}} src="./assets/Asset 8@10x.png"/>
        </Wrapper>
        </Wrapper>
    );
  }
}

export default FifthPage;


