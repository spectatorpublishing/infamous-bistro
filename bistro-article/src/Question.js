import React, { Component } from 'react';
import styled from 'styled-components';
import './global-styles.js';
import GlobalStyle from './global-styles.js';

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
         <GlobalStyle/>
         <Prompt>{this.props.children}</Prompt>
         <PrettyLine><img src="../asset/Asset 8@10x.png"/></PrettyLine>
         </div>
      );
   }
}