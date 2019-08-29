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
    clickedMessage: "Click any of the Game of Thrones Characters"
  };

  setClicked = id => {
    const newMatches = this.state.matches.map(match =>{
      if(match.id === id){
        if(!match.clicked){
          this.setState(
            state => ({
              correctGuesses: state.correctGuesses + 1
            }),
            ()=> {
              console.log(this.state);
              if(this.state.correctGuesses > this.state.bestScore){
                this.setState({bestScore: this.state.correctGuesses});
              }
            }
          );
          match.clicked = true;
        }else{
          this.setState({
            matches,
            correctGuesses: 0
          });
        }
      }
      return match;
    });
    this.setState({
      matches: newMatches
    });
  };

  render(){
    return (
      <Wrapper>
        <Title> Game Of Thrones</Title>
        <h3 className ="scoreSummary">{this.state.clickedMessage}</h3>
        <h3 className = "scoreSummary">
        Correct: {this.state.correctGuesses}{" "}
        Top Score: {this.state.bestScore}{" "}
        </h3>

        {this.state.matches.map(match =>(
          <MatchCard 
          setClicked={this.setClicked}
          id={match.id}
          key={match.id + "-matchCard"}
          images={match.image}
          />
        ))}{" "}
      </Wrapper>
    );
  }
}
export default App;
