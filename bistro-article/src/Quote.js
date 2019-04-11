import React, { Component } from 'react';
import styled from 'styled-components';
import GlobalStyles from './global-styles.js';
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
    font-size: 2rem;
    padding-top: 2rem;
    padding-bottom: 4rem;
    font-family: 'Roboto', sans-serif;
    color: white;

    ${config.mobileBreakpoint} {
        font-size: 1rem;
    }
`

const LetterQuote = styled.span`
    font-size: 5rem;
    color: #98d8a1;
    font-family: 'merriweatherbold';
`

const Author = styled.div`
    visibility: ${(props) => props.visibility};
    font-size: 1.5rem
    font-family: 'Roboto', sans-serif;
    color: white;
`

class Quote extends Component {
  
    render() {
        return (
            <Body width={this.props.width}>
                <GlobalStyles/>
                <Wrapper>
                    <Left>
                        <LetterQuote> 
                            “
                        </LetterQuote>
                    </Left>
                    
                    <TextQuote>
                        {this.props.text}
                    </TextQuote>

                    <Right>
                        <LetterQuote>
                            ”
                        </LetterQuote>
                    </Right>
                </Wrapper>

                <Author visibility={this.props.visibility}>
                    {this.props.quote}
                </Author>
            </Body>
        );
    }
}
  
export default Quote;
