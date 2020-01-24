import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Survey2 from './survey2';
import List from './listall';
import axios from 'axios';
import Button from './btn';
import Img from './img';
import Dog from '../assets/illustrations/dog.png'

class Survey3 extends Component {

  state = {
    allPlants: []
  }

  render() {
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
        <Img image={Dog} />
        <h3>Do you have pets? DO they chew plants?</h3>
        <span>We are asking because some plants can be toxic for your buddy. </span>
        <div className="Divoptions">
          <Button name='pet' value='Sim' changeState={this.props.changeState}>true</Button>
          <Button name='pet' value='Nao' changeState={this.props.changeState}>false</Button>
        </div>
        <div>
          {/* <button onClick={cApi}>Call api</button> */}
        </div>
        <div className="Divnavigate">
          <Link to='/survey2'>Back</Link>
          <Link onClick={cApi} to='/all'>Próximo</Link>
        </div>

        <Switch>
          {/* <Route path='/list' component={() => {<List data={this.state.allPlants}/>}}/> */}
          <Route path='/all' component={() => <List data={this.props.data} />} />
        </Switch>
      </div>
    )
  }
}

export default Survey3;