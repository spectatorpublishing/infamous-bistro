import React, { Component } from 'react';
import styled from 'styled-components';
import Quote from './Quote.js'

const Wrapper = styled.div`
    display: flex;
    align-items: stretch;
    font-size: 0.75rem;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`


class ParentQuestion extends Component {
   render() {
      return (
        <Wrapper>
            <Left>
                hello
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