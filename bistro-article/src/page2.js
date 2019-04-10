import React, { Component } from "react";
import styled from "styled-components";
import './global-styles.js';

export class secondPage extends Component {
  render() {
    return (
        <Text>While you might expect darkness in a place described as “infamous,” in fact,
        Amsterdam Avenue’s newest opening, Infamous Bistro, has none of that. Instead,
        light pours in through a wall of windows and into the <Text style={{fontWeight: 'bold'}}>SPACIOUS & VERDANT NEW
        NEIGHBORHOOD SPOT</Text>
        <Text>On a spring afternoon, the restaurant comes alive
        with sunshine and the smell of the fresh cut flowers that rest on every table. But the</Text>
        <Text style={{fontWeight: 'bold'}}>WARMTH OF THE SPACE </Text> is not just the product of the windows and the interior design; it
        is the product of being in a place where the staff are deeply connected and loyal to
        each other. In other words, <Text style={{fontWeight: 'bold'}}>A FAMILY.</Text>
    );
  }
}
