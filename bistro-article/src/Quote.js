import React, { Component } from 'react';
import styled from 'styled-components';
import GlobalStyles from './global-styles.js';

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
    align-items: flex-start;
`

const TextQuote = styled.div`
    flex: 10;
    font-size: 2em;
    padding-top: 2em;
    padding-bottom: 4em;
    font-family: 'merriweatherlight';
    color: white;
`

const LetterQuote = styled.span`
    font-size: 5em;
    color: #98d8a1;
    font-family: 'merriweatherbold';
`

const Author = styled.div`
    visibility: ${(props) => props.visibility};
    font-size: 1.5em
    font-family: 'merriweatherlight';
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
                            "
                        </LetterQuote>
                    </Left>
                    
                    <TextQuote>
                        {this.props.text}
                    </TextQuote>

                    <Right>
                        <LetterQuote>
                            "
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
