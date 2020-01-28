import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Survey from './survey';
import Survey3 from './survey3';
import Button from './btn';
import Img from './img';
import Water from '../assets/illustrations/wateringcan.png'
import HDrops from '../assets/icons/green/three-drops.svg';
import HWDrops from '../assets/icons/white/three-drops.svg';
import MDrops from '../assets/icons/green/two-drops.svg';
import MWDrops from '../assets/icons/white/two-drops.svg';
import NDrops from '../assets/icons/green/one-drop.svg';
import NWDrops from '../assets/icons/white/one-drop.svg';

class Survey2 extends Component {
  
  
  state = {
    btnSelected: '',
  }

  changeBtn = (value) => {
    console.log(value.toLowerCase())
    this.setState({
      btnSelected: value.toLowerCase()
    })
  }
  
  render() {
    return (
      <div>
        <Img image={Water}/>
        <h3>How often fo you want to <br />water your plant?</h3>
        <div className="Divoptions">
          {
            this.state.btnSelected === 'daily' ?
              <Button name='water' white='white' color='#7BAF9E' image={HWDrops} value='daily' touch={this.changeBtn} changeState={this.props.changeState}>Daily</Button>
              :
              <Button name='water' image={HDrops}  value='daily' touch={this.changeBtn} changeState={this.props.changeState}>Daily</Button>
          }
          {
            this.state.btnSelected === 'regularly' ?
              <Button name='water' white='white' color='#7BAF9E' image={MWDrops} value='regularly' touch={this.changeBtn} changeState={this.props.changeState}>Regularly</Button>
              :
              <Button name='water' image={MDrops}  value='regularly' touch={this.changeBtn} changeState={this.props.changeState}>Regularly</Button>
          }
          {
            this.state.btnSelected === 'rarely' ?
              <Button name='water' white='white' color='#7BAF9E' image={NWDrops} value='rarely' touch={this.changeBtn} changeState={this.props.changeState}>Rarely</Button>
              :
              <Button name='water' image={NDrops} value='rarely' touch={this.changeBtn} changeState={this.props.changeState}>Rarely</Button>
          }



        </div>

        <div className="Divnavigate">
          <Link to='/survey' className="arrowBack">previous</Link>
          <Link to='/survey3' className="arroFront">next</Link>
        </div>

        <Switch>
          {/* <Route path='/survey3' component={Survey3} /> */}
        </Switch>
      </div>
    )
  }
}

export default Survey2;