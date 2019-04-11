import React, { Component } from 'react';
import styled from 'styled-components';
import config from './config.js';

const Body = styled.div`
    width: ${(props) => props.width};
    text-align: center;
`

const Wrapper = styled.div`
    display: flex;
    width: ${(props) => props.width};
    font-family: 'redgar';
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column-reverse;
    align-itrems: flex-start;
`

const TextQuote = styled.div`
    flex: 10;
    font-size: ${props => props.scale * 2}rem;
    padding-top: ${props => props.scale * 2}rem;
    padding-bottom: ${props => props.scale * 4}rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    color: white;

    ${config.mobileBreakpoint} {
        font-size: ${props => props.scale * 1}rem;
    }
`

const LetterQuote = styled.span`
    font-size: ${props => props.scale * 5}rem;
    color: #98d8a1;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
`

const Author = styled.div`
    visibility: ${(props) => props.visibility};
    font-size: ${props => props.scale * 1.5}rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    color: white;
    ${config.mobileBreakpoint} {
        font-size: ${props => props.scale * 1}rem;
    }
`

class Quote extends Component {
  
    render() {
        return (
            <Body width={this.props.width}>
                <Wrapper>
                    <Left>
                        <LetterQuote scale={this.props.scale}> 
                            “
                        </LetterQuote>
                    </Left>
                    
                    <TextQuote scale={this.props.scale}>
                        {this.props.text}
                    </TextQuote>

                    <Right>
                        <LetterQuote scale={this.props.scale}>
                            ”
                        </LetterQuote>
                    </Right>
                </Wrapper>

                <Author visibility={this.props.visibility} scale={this.props.scale}>
                    {this.props.quote}
                </Author>
            </Body>
        );
    }
}
  
export default Quote;
