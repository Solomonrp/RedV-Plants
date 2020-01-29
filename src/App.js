import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './components/home'
import Survey from './components/survey';
import Survey2 from './components/survey2';
import Survey3 from './components/survey3';
import List from './components/listall';
import OneItem from './components/one';
import './style/App.css';
import axios from 'axios';

class App extends Component {
  state = {
    sun: '',
    water: '',
    pet: '',
    name: '',
    email: '',
    id: '',
    formStatus: 0,
    allPlants: []
  }

  changeState = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  sendForm = () => {

    console.log(this.state);

    axios.post('https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service', 
    {
      "name": this.state.name,
      "email": this.state.email,
      "id": this.state.id
    }
    ).then ( resp => {
      console.log(resp);
    }).then (status => this.setState({formStatus : 1}))
    .catch (error => {
      console.log(error);
    })
  }

  callApi = () => {
    axios.get(`https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service?sun=${this.state.sun}&water=${this.state.water}&pets=${this.state.pet}`)
      .then(response => {
        this.setState({ allPlants: response.data })
      }).catch (erro => {
        console.log(erro);
      })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => <Home changeState={this.changeState} api={this.callApi} data={this.state.allPlants} />} />
          <Route path='/survey' render={() => <Survey changeState={this.changeState} escolha={'teste props 1'} />} />
          <Route path='/survey2' render={() => <Survey2 changeState={this.changeState} escolha={'teste props 2'} />} />
          <Route path='/survey3' render={() => <Survey3 changeState={this.changeState} escolha={'teste props 3'} api={this.callApi} />} />
          <Route path='/all' render={() => <List data={this.state.allPlants} api={this.callApi} />} />
          <Route path='/one/:id' render={(props) => <OneItem {...props} changeState={this.changeState} send={this.sendForm} formStatus={this.state.formStatus} />} />
        </Switch>
      </div>
    )
  }
}

export default App;
