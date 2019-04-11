import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: inline-block;
    width: 80vw;
    font-size: 1.5rem;
    line-height: 3.5rem;
    font-family: 'Roboto';
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

export class FourthPage extends Component {
  render() {
    return (
        <Wrapper>
        <img style={{"width":"50%"}} src="https://s3.amazonaws.com/spec-imagehosting/Asset+8%4010x.png"/>
        <Highlight> This theme of family and close connection </Highlight>
        extends to everything at Infamous Bistro. Many members of the staff, from the kitchen to the front of the house and then back to
the owners of the restaurant, are from Balkan Europe. As a result, English flows in and out of Serbian, and the staff are able to converse fluently on more than one plane. Jelena and other members of the front of the house remarked on how much of the culture of Serbia, how much of the
        <Highlight>friendliness, compassion, & loyalty</Highlight>
        that she associates with her first home country, carries over into the restaurant because the staff has a large Balkan representation. But family is present at Infamous Bistro
        <Highlight> BEYOND SHARED NATIONAL IDENTITIES. </Highlight>
        <img style={{"width":"50%","float":"right","margin-top": "1rem"}} src="https://s3.amazonaws.com/spec-imagehosting/Asset+8%4010x.png"/>
        </Wrapper>
    );
  }
}

export default FourthPage;