import React, { Component } from 'react';
import styled from 'styled-components';

const Prompt = styled.div`
   font-size: 1.0rem;
   @font-face:
`
const PrettyLine = styled.div`

`

class Question extends Component {
   render() {
      return (
         <Prompt>{this.props.children}</Prompt>
         <PrettyLine><img src="../asset/Asset 8@10x.png"/></PrettyLine>
      );
   }
}