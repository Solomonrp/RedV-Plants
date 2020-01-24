import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Survey from './survey';
import Survey3 from './survey3';
import Button from './btn';
import Img from './img';
import Water from '../assets/illustrations/wateringcan.png'


class Survey2 extends Component {
  render() {
    return (
      <div>
        <Img image={Water}/>
        <h3>How often fo you want to <br />water your plant?</h3>
        <div className="Divoptions">
          <Button name='water' value='muita' changeState={this.props.changeState}>daily</Button>
          <Button name='water' value='media' changeState={this.props.changeState}>regularly</Button>
          <Button name='water' value='pouca' changeState={this.props.changeState}>rarely</Button>
        </div>

        <div className="Divnavigate">
          <Link to='/survey'>Back</Link>
          <Link to='/survey3'>Próximo</Link>
        </div>

        <Switch>
          {/* <Route path='/survey3' component={Survey3} /> */}
        </Switch>
      </div>
    )
  }
}

export default Survey2;