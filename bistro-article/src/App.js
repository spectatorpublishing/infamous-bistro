import React, { Component } from 'react';
import Quote from './Quote.js';
import Slide from './Components/Slide';
import Background from './Components/Background';
import SecondPage from './PageTwo.js';
import FourthPage from './PageFour.js';
import FifthPage from './PageFive.js';
import SixthPage from './PageSix.js';
import { createGlobalStyle } from 'styled-components';
import TitlePage from './Components/TitlePage';
import smoothscroll from 'smoothscroll-polyfill';
import Interview from './Components/Interview';
import styled from 'styled-components';

smoothscroll.polyfill();

let PhotoCredits = styled.div`
  color: white;
  font-size: 1.2rem;
  text-align: center;
  display: block;
  margin: 1rem 0;
  z-index: 1;
  position: relative;
`

const GlobalStyle = createGlobalStyle`
  @font-face {
     font-family: 'redgar';
     src: url('https://s3.amazonaws.com/spec-imagehosting/Redgar.ttf');
  }
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,500');

  body {
    margin: 0;
    padding: 0;
    font-family: "redgar", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  #navbar .header-brand2 {
    filter: invert(1);
  }

`
const Data = [{
  background: "https://s3.amazonaws.com/spec-imagehosting/E7f8Z_fw.jpeg",
  filter: "brightness(50%)",
  component: <TitlePage title={"ROOTS, INFLUENCES,"} subtitle={"GOOD FOOD"}/>
},
{
  background: "https://s3.amazonaws.com/spec-imagehosting/3WTtONsY.jpeg",
  filter: "brightness(50%)",
  component: <SecondPage/>
},
{
  background: "https://s3.amazonaws.com/spec-imagehosting/Jo8urKb0.jpeg",
  filter: "brightness(50%)",
  component: <Quote width='60%' scale='1' visibility='visible'
  text='My title used to be general manager, but I didn’t like that. I
  mean, I’m not managing anybody. I see these people every
  day and, even when we’re not at work, we’re still together and
  hanging out. We’re friends, but we’re also family. I’m not a
  manager of my family.'
  quote='- Jelena, Creative Director of Infamous Bistro '> </Quote>
},
{
  background: "https://s3.amazonaws.com/spec-imagehosting/aHCUHV5A.jpeg",
  filter: "brightness(50%)",
  component: <FourthPage/>
},
{
  background: "https://s3.amazonaws.com/spec-imagehosting/JxC-hreR.jpeg",
  filter: "brightness(50%)",
  component: <FifthPage/>
},
{
  background: "https://s3.amazonaws.com/spec-imagehosting/MRsfi4Z4.jpeg",
  filter: "brightness(50%)",
  component: <SixthPage/>
},
{
  background: "https://s3.amazonaws.com/spec-imagehosting/BEx70rMU.jpeg",
  filter: "brightness(50%)",
  slideStyle: `
    align-items: stretch;
  `,
  component: <Interview quote="- Zivko Radojcic, Chef & Owner" data={[
    {
      question: "What are some of your favorite foods from Serbia that you feel that you just cannot get done well in New York?",
      response: "“Well actually, I know this isn’t your question, but I really like Kafana in the Lower East Side. They have certain food that is good, but of course they don’t have everything. I don’t miss that much Balkan food because I can usually make what I miss! One thing I will say is that it’s a mix - each of these places, they do a few things well, and they all do different things well. At Kafana, you get čevapi, at another place you might get begova čorba.When you’re grown and you’ve tasted so many different cultures’ cuisines, I think you tend to miss old flavors less because you’re more open to new flavors.”"
    },
    {
      question: "What do you think a good dish should do - should it evoke a memory, make you feel comfortable, challenge you?",
      response: "“I don’t know how would I explain this in English, but one of my favorite dishes is mučkalica, where you mix together what you have with pork in a tomato sauce. Roasted peppers, chili fakes, whatever you have. It’s a very comfortable dish, very good for winter. There’s this saying: food that you eat with a spoon. It basically means food that comforts you, and I think that’s a really good thing.”"
    },
    {
      question: "Is there anything that you’re tired of seeing with food?",
      response: "“Maybe pictures on Instagram. I’m always trying to make good-looking food but, realistically, a piece of fish with some sauce isn’t that kind of an Instagram food. It’s very nice-looking in the context of a tasting menu, something with many smaller courses. I feel like there is a lot of food art going on and the food that people take pictures of is very different from the food that they are serving and eating. I don’t know, maybe that’s just what I’m seeing. It’s not that I’m sick of it, it’s just a bit tiring.”"
    },
    {
      question: "How did you come up with the concept for Infamous Bistro? What drew you to these flavors?",
      response: "“We wanted to do something more casual than our first restaurant, Marlow Bistro. There’s also a lot of freedom with this food because it is new Modern American, whereas Marlow is a bit more strictly Mediterranean. With new Modern American, you can pick from wherever you want a little bit. Both restaurants are heavily influenced by what I’ve done before and where I’ve worked before, but are also influenced by the food back home, and also by food I’ve had while travelling.”"
    },
    {
      question: "What is your favorite dish at Infamous Bistro?",
      response: "“Both places have a burger that I really love. Marlow’s burger is a beef patty with some secret spices. Onion, bacon, cheese, and paprika are mixed in, and it’s served on a pizza bun with a mildly spicy sauce - not too spicy though. It’s a goat cheese and roasted pepper spread with a very Balkan -style cabbage slaw on top of the patty. But then the Infamous Bistro burger is a bit different. It’s made of ground brisket instead of regular ground chuck, and then it is topped with smoked brisket, cooked low and slow for 36 hours. So we called it the Double Brisket Burger. We serve it with caramelized onions, chipotle mayo, and cheese, also on a pizza bun.”"
    }
  ]}/>
},
{
  background: "https://s3.amazonaws.com/spec-imagehosting/F5TPvFN8.jpeg",
  filter: "brightness(50%)",
  slideStyle: `
    align-items: stretch;
  `,
  component: <Interview quote="- Milos Zica, Bartender" data={[{
    question: "What are some of your favorite foods from Serbia that you feel that you just cannot get done well in New York?",
    response: "“Kafana is very good! Barbecue in general, rostilj, is my favorite, and it’s very hard to find here. Maybe a good old sarma. Homemade ajvar is never good in New York either, you can’t get it anywhere the way you can get it at home.”"
  },
  {
    question: "Do you miss any of the homemade alcohols from the Balkans?",
    response: "“Yes, of course. Rakija, definitely, because it drinks so cleanly. Sljivovica is great, and very delicious, but I cannot drink it anymore because I drank nearly a full liter when I was about 12, ended up in the hospital, and now I’m a bartender! Kajsija, the apricot rakija, and loza, which is so famous in Montenegro, are other kinds of Rakija that I really like. I like to think of Rakija as Balkan tequila, and I think that it’s one of cleanest spirits in the world."
  },
  {
    question: "What should a good drink do?",
    response: "It should take you on a journey. With every sip, it should open up those taste sense in you. It should make you feel pleasant and then maybe even inspire you and bring up some ideas for you."
  },
  {
    question: "Do you have a favorite classic cocktail? And do you have a favorite cocktail that you’re ever created?",
    response: `I love a Rye Manhattan, a Jerry Thomas Manhattan, made with Rye whiskey, grand mariner, curacao, angostura bitters, and sweet vermouth. I love those, but they’re very dangerous. I love Sazeracs, and I love a classic Daquiri with just rum, sugar, and lime. I’m huge on tequila and mezcal, I love drinking Palomas, I love Tom Collins. There are so many. 
    My favorite cocktail that I’ve ever made is called a “High Octane Fix,” and it’s quite complex. It’s made of Diplomatico Riserva Rum, Cocchi di Torino Sweet Vermouth, chocolate bitters, angostura bitters, a bit of Grand Marnier, and Laphroaig. And that’s it.”`
  }]}/>
}]

class App extends Component {

  constructor() {
    super()
    this.state = {
      background: []
    }
    this.images = []
    this.updateBackground = this.updateBackground.bind(this)
  }

  updateBackground(i) {
    this.setState({
      background: Data[i]
    })
    if (i > 1 && !Data[i - 1].preloaded) {
      let img = new Image()
      img.src = Data[i - 1].background
      this.images.push(img)
      Data[i - 1].preloaded = true
    }
    if (i < Data.length - 1 && !Data[i + 1].preloaded) {
      let img = new Image()
      img.src = Data[i + 1].background
      this.images.push(img)
      Data[i + 1].preloaded = true
    }
  }

  render() {
    return <div>
      <GlobalStyle/>
      <Background {...this.state.background}/>
      <div>
      {
        Data.map((i, index) => <Slide key={index} slideStyle={i.slideStyle} index={index} updateBackground={this.updateBackground}>{i.component}</Slide>)
      }
      </div>
      <PhotoCredits>Photos by Molly Tavoletti</PhotoCredits>
    </div>
  }
}

export default App;
