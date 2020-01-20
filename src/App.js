import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    sun: '',
    watter: '',
    pet: ''
  }

  changeState = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <a>Start</a>
      </div>
    )
  }
}

export default App;
