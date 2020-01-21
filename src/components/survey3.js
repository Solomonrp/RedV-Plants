import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Survey2 from './survey2';
import List from './listall';
import axios from 'axios';

class Survey3 extends Component {

  state = {
    allPlants : []
  }

  render() {
    const select = (event) => {
      this.props.changeState(event.target.name, event.target.text);
      console.log(event.target.name);
      console.log(event.target.text);
    }

    const cApi = () => {
      console.log('foi')
      this.props.api();
        // axios.get(`https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service?sun=${this.state.sun}&water=${this.state.water}&pets=${this.state.pet}`)
        // .then(response => {
        //     this.setState({allPlants: response.data})
        // })
    }

    return (
      <div>
      <a>Teste3</a>
      <a>{this.props.escolha}</a>
      <div>
          <a name='pet' value='Sim' onClick={select}>false</a>
          <a name='pet' value='Nao' onClick={select}>true</a>
        </div>
        <div>  
          {/* <button onClick={cApi}>Call api</button> */}
        </div>
        <Link to='/survey2'>Back</Link>
        <Link onClick={cApi} to='/all'>Próximo</Link>

        <Switch>
          {/* <Route path='/list' component={() => {<List data={this.state.allPlants}/>}}/> */}
          <Route path='/all' component={() => <List data={this.props.data}/>} />
        </Switch>
      </div>
    )
  }
}

export default Survey3;