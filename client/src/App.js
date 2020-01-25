import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import PlayerList from "./Components/PlayerList";
import "./App.css";

class App extends Component {
  state = {
    playerArray: [],
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(players => {
        console.log(players);
        this.setState({ ...this.state, playerArray: players });
        // console.log(user.login)
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Navbar />
        <PlayerList players={this.state.playerArray} />
      </div>
    );
  }
}

export default App;
