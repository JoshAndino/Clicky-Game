import React, {Component} from "react";
import MatchCard from "./Components/MatchCard";
import Wrapper from "./Components/Wrapper";
import Title from "./Components/Title";
import matches from "./icon.json";


class App extends Component {
  // setting this.state.matches to the json array
  state = {
    matches,
    correctGuesses: 0,
    bestScore: 0,
    clickedMessage: "Click any of the Game of Thrones Characters",
    clickedCards: []
  };

  setClicked = id => {
        if(this.state.clickedCards.includes(id)){
          this.setState({
            correctGuesses: 0,
            clickedCards: []
          }); this.shuffle(matches)
        }else{
          this.setState({
            correctGuesses: this.state.correctGuesses + 1,
            clickedCards: [...this.state.clickedCards,id]
          });
          this.shuffle(matches)
        }
      };
      
      shuffle =(array) => {

        var currentIndex = array.length;
        var temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      
      };
    

  render() {
    console.log(this.state)
    return (
      <>
      <Wrapper>
        <Title> Game Of Thrones</Title>
        <h3 className ="scoreSummary">{this.state.clickedMessage}</h3>
        <h3 className = "scoreSummary">
        Correct: {this.state.correctGuesses}
        Top Score: {this.state.bestScore}
        </h3>

        {this.state.matches.map(match =>(
          <MatchCard 
          setClicked={this.setClicked}
          id={match.id}
          key={match.id}
          images={match.image}
          />
        ))}
      </Wrapper>
      </>
    );
  };
}

export default App;
