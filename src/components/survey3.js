import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Survey2 from './survey2';
import List from './listall';
import axios from 'axios';
import '../style/survey3.css';
import Button from './btn';
import Img from './img';
import Dog from '../assets/illustrations/dog.png'
import MDog from '../assets/icons/grey/pet.svg';
import MWDog from '../assets/icons/white/pet.svg';
import NDog from '../assets/icons/grey/no-answer.svg';
import NWDog from '../assets/icons/white/no-answer.svg';

class Survey3 extends Component {

  state = {
    allPlants: [],
    btnSelected: '',
  }

  changeBtn = (value) => {
    console.log(value)
    this.setState({
      btnSelected: value
    })
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
      <div className="dog_survey">
        <Img image={Dog} />
        <div className="survey3_secod_son">
          <h2>Do you have pets? Do they <b>chew</b> plants?</h2>
          <a>We are asking because some plants can be toxic for your buddy. </a>
        </div>
        <div className="Divoptions survey3_third_son">
          {
            this.state.btnSelected === 'true' ?
              <Button name='pet' white='white' color='#FD9872' image={MWDog} value='Sim' touch={this.changeBtn} changeState={this.props.changeState}>true</Button>
              :
              <Button name='pet' image={MDog} value='muita' touch={this.changeBtn} changeState={this.props.changeState}>true</Button>
          }
          {
            this.state.btnSelected === 'false' ?
              <Button name='pet' white='white' color='#FD9872' image={NWDog} value='Não' touch={this.changeBtn} changeState={this.props.changeState}>false</Button>
              :
              <Button name='pet' image={NDog} value='media' touch={this.changeBtn} changeState={this.props.changeState}>false</Button>
          }
        </div>
        <div className="Divnavigate survey3_fourth_son">
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