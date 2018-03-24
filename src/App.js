import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/scoreDiv";
import shows from "./shows.json";
import "./App.css";

class App extends Component {
  state = {
    showOrder: shows,
    showsToCheck: shows.map(show => show.id),
    correct: 0,
    highScore: 0,
    message: "Click on the shows to earn points! But don't click the same show twice!"
  };

  check = id => {
    if (this.state.showsToCheck.includes(id)) {
      const newShowsToCheck = this.state.showsToCheck.filter(x => x !== id);
      const int = this.state.correct +1;
      let newBest = this.state.highScore;
      if (int > this.state.highScore) {
        newBest = this.state.highScore +1; 
      }
      this.setState({showsToCheck: newShowsToCheck, correct: int, showOrder: this.shuffle(shows), highScore: newBest, message: "Correct!"});
    } else {
      this.setState( {showsToCheck: shows.map(show => show.id), correct: 0, showOrder: this.shuffle(shows), message: "Nope!"} );
    }
  };

  shuffle = (shows) => {
    var currentIndex = shows.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = shows[currentIndex];
    shows[currentIndex] = shows[randomIndex];
    shows[randomIndex] = temporaryValue;
    }

    return shows;
  }

  render() {
    return (
      <Wrapper>
        <Title>NETCLIX</Title>
        <Score
          message={this.state.message}
          score={this.state.correct}
          highScore={this.state.highScore}
        />
        <div className="board">
          {shows.map(show => (
            <FriendCard
              check={this.check}
              id={show.id}
              key={show.id}
              image={show.image}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
