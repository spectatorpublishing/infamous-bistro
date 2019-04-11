import React, { Component } from 'react';
import styled from 'styled-components';

const Prompt = styled.div`
   font-size: 1.0rem;
   @font-face: redgar;
`
const PrettyLine = styled.div`

`

class Question extends Component {
   render() {
      return (
         <div>
         <Prompt>{this.props.children}</Prompt>
         <PrettyLine><img alt="arrow" src="https://s3.amazonaws.com/spec-imagehosting/Asset+8%4010x.png"/></PrettyLine>
         </div>
      );
   }
}

export default Question;