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
<<<<<<< HEAD:bistro-article/src/Components/Question.js
         <PrettyLine><img src="/asset/arrow.png"/></PrettyLine>
=======
         <PrettyLine><img src="../asset/Asset 8@10x.png"/></PrettyLine>
>>>>>>> 340cd5fad464c9b5ee63b15d1339e0102387a884:bistro-article/src/Question.js
         </div>
      );
   }
}

export default Question;