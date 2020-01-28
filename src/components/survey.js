import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import '../survey1.css';
import Button from './btn';
import Img from './img';
import Sun from '../assets/illustrations/sun.png';
import HSun from '../assets/icons/coral/high-sun.svg';
import HWSun from '../assets/icons/white/high-sun.svg';
import MSun from '../assets/icons/coral/low-sun.svg';
import MWSun from '../assets/icons/white/low-sun.svg';
import NSun from '../assets/icons/coral/no-answer.svg';
import NWSun from '../assets/icons/white/no-answer.svg';
import Arrowl from '../assets/arrow_direita.png';
import logo from '../assets/logo/logo-greenthumb.svg';


class Survey extends Component {

  state = {
    btnSelected: '',
  }

  changeBtn = (value) => {
    console.log(value)
    this.setState({
      btnSelected: value
    })
  }

  getData = (event) => {
    console.log(event);
  }

  render() {
    return (
      <div className="wrapper1">
        <div className="wrapper1_son">
          <img src={logo} />
          <hr size="250" />
        </div>
        <div>
          <Img image={Sun} />
          <h3>First, set the amount of <br /> sunlight your plant willget.</h3>
          <div className='Divoptions'>
            {
              this.state.btnSelected === 'high' ?
                <Button name='sun' white='white' color='#FD9872' image={HWSun} value='high' touch={this.changeBtn} changeState={this.props.changeState}>High sunlight</Button>
                :
                <Button name='sun' image={HSun}  value='high' touch={this.changeBtn} changeState={this.props.changeState}>High sunlight</Button>
            }
            {
              this.state.btnSelected === 'low' ?
                <Button name='sun' white='white' color='#FD9872' image={MWSun} value='low' touch={this.changeBtn} changeState={this.props.changeState}>Low sunlight</Button>
                :
                <Button name='sun' image={MSun}  value='low' touch={this.changeBtn} changeState={this.props.changeState}>Low sunlight</Button>
            }
            {
              this.state.btnSelected === 'no' ?
                <Button name='sun' white='white' color='#FD9872' image={NWSun} value='no' touch={this.changeBtn} changeState={this.props.changeState}>No sunlight</Button>
                :
                <Button name='sun' image={NSun}  value='no' touch={this.changeBtn} changeState={this.props.changeState}>No sunlight</Button>
            }
          </div>
          <div className='Divnavigate'>
            <Link to='/' className="arrowBack">previous</Link>
            <Link to='/survey2' className="arroFront">next</Link>
          </div>

          <Switch>
            {/* <Route path='/survey2' component={Survey2}/> */}
            {/* <Route path='/survey2' render={() => <Survey2 changeState={this.props.changeState} escolha={'teste props 2'} />} />
          <Route path='/survey3' render={() => <Survey3 changeState={this.props.changeState} escolha={'teste props 3'} api={this.props.api} />} />
          <Route path='/all' render={() => <List data={this.props.data} api={this.props.api} />} />
          <Route path='/one/:id' render={(props) => <OneItem {...props} />} /> */}

          </Switch>
        </div>
      </div>
    )
  }
}

export default Survey;