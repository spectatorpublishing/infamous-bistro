import React, { Component } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../global-styles.js';

const Prompt = styled.div`
   font-size: 2.5rem;
   @font-face: redgar;
   padding-left: 1px;
   text-align: left;
`

const PrettyLine = styled.div`
   
`


class Question extends Component {
   render() {
      return (
         <div>
         <GlobalStyle/>
         <Prompt>{this.props.children}</Prompt>
         <PrettyLine><img src="/asset/arrow.png"/></PrettyLine>
         </div>
      );
   }
}

export default Question;