import React, { Component } from "react";
import logo from "./logo.svg";
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
        <h1>text</h1>
      </div>
    );
  }
}

export default App;
