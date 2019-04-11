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
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-tiems: flex-start;
`

const Right = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
`

const TextQuote = styled.div`
    flex-grow: 10;
    font-size: 2rem;
    padding-top: 2rem;
    padding-bottom: 4rem;
    font-family: 'merriweatherlight';
    color: white;
`

const LetterQuote = styled.span`
    font-size: 5rem;
    color: #98d8a1;
    font-family: 'merriweatherbold';
`

const Author = styled.div`
    visibility: ${(props) => props.visibility};
    font-size: 1.5rem
    font-family: 'merriweatherlight';
    color: white;
`

class Quote extends Component {
  
    render() {
        return (
            <Body width={this.props.width}>
                <Wrapper>
                    <GlobalStyles/>
                    
                    <Left>
                        <LetterQuote> 
                            "
                        </LetterQuote>
                    </Left>
                    
                    <TextQuote>
                    My title used to be general manager, but I didn’t like that. I
                    mean, I’m not managing anybody. I see these people every
                    day and, even when we’re not at work, we’re still together and
                    hanging out. We’re friends, but we’re also family. I’m not a
                    manager of my family. 
                    </TextQuote>

                    <Right>
                        <LetterQuote>
                            "
                        </LetterQuote>
                    </Right>
                </Wrapper>

                <Author visibility={this.props.visibility}>
                    - Jelena, Creative Director of Infamous Bistro 
                </Author>
            </Body>
        );
    }
}
  
export default Quote;
