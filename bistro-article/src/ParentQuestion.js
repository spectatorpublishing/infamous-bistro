import React, { Component } from 'react';
import styled from 'styled-components';
import './global-styles.js';
import GlobalStyle from './global-styles.js';
import Question from './Question.js'
import Quote from './Quote.js'

const Wrapper = styled.div`
    display: flex;
`
const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`


class ParentQuestion extends Component {
   render() {
      return (
        <Wrapper>
            <GlobalStyle/>
            <Left>

            </Left>

            <Right>
                <Quote width='50%' visibility='hidden'
                text='My title used to be general manager, but I didn’t like that. I
                mean, I’m not managing anybody. I see these people every
                day and, even when we’re not at work, we’re still together and
                hanging out. We’re friends, but we’re also family. I’m not a
                manager of my family.'> 
                </Quote>
            </Right>
        </Wrapper>
      );
   }
}

export default ParentQuestion;