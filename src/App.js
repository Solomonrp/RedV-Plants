import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './components/home'
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    sun: '',
    water: '',
    pet: '',
    allPlants: []
  }

  changeState = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  callApi = () => {
    axios.get(`https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service?sun=${this.state.sun}&water=${this.state.water}&pets=${this.state.pet}`)
        .then(response => {
            this.setState({allPlants: response.data})
        })

    // let res = axios.get(`https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service?sun=${this.state.sun}&water=${this.state.water}&pets=${this.state.pet}`);
    // let { data } = res.data;
    // this.setState({ allPlants: data })
    console.log(this.state.allPlants)
  }

  render() {
    return (
      <div className="App">
        <Home changeState={this.changeState} api={this.callApi} data={this.state.allPlants} />
      </div>
    )
  }
}

export default App;
