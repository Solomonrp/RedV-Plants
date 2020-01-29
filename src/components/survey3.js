import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Survey2 from './survey2';
import List from './listall';
import axios from 'axios';
import '../style/survey3.css';
import Button from './btn';
import Img from './img';
import Dog from '../assets/illustrations/dog.png'
import MDog from '../assets/icons/coral/pet.svg';
import MWDog from '../assets/icons/white/pet.svg';
import NDog from '../assets/icons/coral/no-answer.svg';
import NWDog from '../assets/icons/white/no-answer.svg';

class Survey3 extends Component {

  state = {
    allPlants: [],
    btnSelected: '',
  }

  changeBtn = (value) => {
    console.log('aqui',value)
    this.setState({
      btnSelected: value
    })
  }

  render() {
    const cApi = () => {
      this.props.api();
    }

    return (
      <div className="dog_survey">
        <div className='logo_father logo_fatherS'>
          <img className='logo' />
        </div>
        <Img image={Dog} />
        <div className="survey3_secod_son">
          <h2>Do you have pets? Do they <b>chew</b> plants?</h2>
          <div className="survey3_secod_son_sib">
            <a>We are asking because some plants can be toxic for your buddy. </a>
          </div>
        </div>
        <div className="Divoptions survey3_third_son">
          {
            this.state.btnSelected === 'true' ?
              <Button name='pet' white='white' color='#FD9872' image={MWDog} value='true' touch={this.changeBtn} changeState={this.props.changeState}>Yes</Button>
              :
              <Button name='pet' image={MDog} value='true' touch={this.changeBtn} changeState={this.props.changeState}>Yes</Button>
          }
          {
            this.state.btnSelected === 'false' ?
              <Button name='pet' white='white' class="survey3_no_btn" color='#FD9872' image={NWDog} value='false' touch={this.changeBtn} changeState={this.props.changeState}>No/They don't care</Button>
              :
              <Button name='pet' image={NDog} class="survey3_no_btn" value='false' touch={this.changeBtn} changeState={this.props.changeState}>No/They don't care</Button>
          }
        </div>
        <div className="Divnavigate survey3_fourth_son">
          <Link to='/survey2'  className="arrowBack">previous</Link>
          <Link onClick={cApi} to='/all' className="arroFront">finish</Link>
        </div>
        <Switch>
          <Route path='/all' component={() => <List data={this.props.data} />} />
        </Switch>
      </div>
    )
  }
}

export default Survey3;