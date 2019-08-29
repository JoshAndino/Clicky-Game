
import icons from "./icon.json";
import Nav from "./componets/nav/nav";
import IconCard from "./componets/iconHolder/index";
import React, {Component} from "react";


// Setting the initial state of things
class App extends Component {
  state = {
    icons: [...icons],
    clicked: [],
    score: 0,
    highscore: 0,
  };
  

  //sorting icon cards
  sortIcons = () =>{
    this.state.icons.sort( (a,b) => {return 0.5 - Math.random()});
  };

  //setting the highscore
  setHighScore = () => {
    if(this.state.score > this.state.highscore){
      this.setState({
        highscore: this.state.score
      });
    }
  };

  //reset game after lost
  resetGame = () => {
    this.setHighScore();
    this.setState({
      clicked : [],
      score: 0
    })
  };
  iconClick = (event) => {
    //const currentIcon = event.icons.id;
    // check which icon card was clicked
   // const isClicked = this.state.clicked.indexOf(event) > -1;

   let isChecked = false; 
   const icons = [...this.state.icons];
  console.log(isChecked + icons.id)


  //  icons.forEach(icon => {
  //    if(icon.id === event){
  //      if(isChecked === false){
  //       isChecked = true;
  //       icon.clicked = true;
  //       console.log(icon.clicked + " the new status of click is: " + isChecked)
  //      }
  //    }
  //  })
   // console.log("this is the card ID: " + event + "the status of click is: " + isClicked)
    // if same icon card clicked end game
    // if (isClicked === true) {
    //   this.sortIcons();
    //   this.resetGame();
    // } 

  };
  //onclick action
  render(){
    return (
      <div className = 'App'>
      <Nav 
      highscore = {this.state.highscore}
      score = {this.state.score}/>

      <div className ='container'>
      <div className ='row'>
      {this.state.icons.map(icon =>(
        <IconCard
        onClick={this.iconClick(icon.id)}
        id={icon.id}
        key={icon.id}
        image={icon.image}
        />
      ))}
      </div>
      </div>
      </div>
    )
  }
}
export default App;
