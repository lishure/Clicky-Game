// imports dependencies and files
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card/Card.js';
import Footer from './components/Footer';
import dessert from './dessert.json';
import './App.css';

//sets state to 0 or empty
class App extends Component {
  state = {
    dessert,
    clickedDessert: [],
    score: 0
  };
  
//when you click on a card ... the dessert is taken out of the array
imageClick = event => {
  const currentDessert = event.target.alt;
  const DessertAlreadyClicked =
    this.state.clickedDessert.indexOf(currentDessert) > -1;

//if you click on a dessert that has already been selected, the game is reset and cards reordered
  if (DessertAlreadyClicked) {
    this.setState({
      dessert: this.state.dessert.sort(function(a, b) {
        return 0.5 - Math.random();
      }),
      clickedDessert: [],
      score: 0
    });
      alert("You lose. Play again?");

//if you click on an available dessert, your score is increased and cards reordered
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
//if you get all 12 dessert corrent you get a congrats message and the game resets        
      () => {
        if (this.state.score === 12) {
          alert("Wow, You got all 12!");
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
