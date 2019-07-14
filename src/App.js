// import files
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card/Card.js';
import Footer from './components/Footer';
import dessert from './dessert.json';
import './App.css';

//sets state to 0
class App extends Component {
  state = {
    dessert,
    clickedDessert: [],
    score: 0
  };
  
//When clicked, the dessert is taken out of the array
imageClick = event => {
  const currentDessert = event.target.alt;
  const DessertAlreadyClicked =
    this.state.clickedDessert.indexOf(currentDessert) > -1;

//If selected dessert that was already clicked, images are shuffled and score resets to 0
  if (DessertAlreadyClicked) {
    this.setState({
      dessert: this.state.dessert.sort(function(a, b) {
        return 0.5 - Math.random();
      }),
      clickedDessert: [],
      score: 0
    });

//if clicked on unclicked dessert, score will increse by 1 and images will shuffle
  } else {
    this.setState(
      {
        dessert: this.state.dessert.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedDessert: this.state.clickedDessert.concat(
          currentDessert
        ),
        score: this.state.score + 1
      },
//If score = 12, alert message and game will restart and images will shuffle    
      () => {
        if (this.state.score === 12) {
          alert("Wow, you got all 12, dessert is on me!");
          this.setState({
            dessert: this.state.dessert.sort(function(a, b) {
              return 0.5 - Math.random();
            }),
            clickedDessert: [],
            score: 0
          });
        }
      }
    );
  }
};
//the order of components to be rendered
  render() {
    console.log(dessert)
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.dessert.map(dessert => (
            <Card
              imageClick={this.imageClick}
              id={dessert.id}
              key={dessert.id}
              image={dessert.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
