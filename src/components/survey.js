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

  render() {
    return (
      <div>
        <Img image={Sun} />
        <h3>First, set the amount of <br /> sunlight your plant willget.</h3>
        <div className='Divoptions'>
          {/* //colocar state para se o botão tivar state 1 mostra o normal e state 2 para o selecionado 
          //Se o botão tivar no state select ele é o único que fica branco */}

          {
            this.state.btnSelected === 'high' ?
              <Button name='sun' white='white' color='#FD9872' image={HWSun} value='muita' touch={this.changeBtn} changeState={this.props.changeState}>high</Button>
              :
              <Button name='sun' image={HSun} id='1' value='muita' touch={this.changeBtn} changeState={this.props.changeState}>high</Button>
          }
          {
            this.state.btnSelected === 'low' ?
              <Button name='sun' white='white' color='#FD9872' image={MWSun} value='pouca' touch={this.changeBtn} changeState={this.props.changeState}>low</Button>
              :
              <Button name='sun' image={MSun} id='2' value='pouca' touch={this.changeBtn} changeState={this.props.changeState}>low</Button>
          }
          {
            this.state.btnSelected === 'no' ?
              <Button name='sun' white='white' color='#FD9872' image={NWSun} value='media' touch={this.changeBtn} changeState={this.props.changeState}>no</Button>
              :
              <Button name='sun' image={NSun} id='3' value='media' touch={this.changeBtn} changeState={this.props.changeState}>no</Button>
          }
        </div>
        <div className='Divnavigate'>
          <Link to='/'>Back</Link>
          <Link to='/survey2'>Próximo
          </Link>
        </div>

        <Switch>
          {/* <Route path='/survey2' component={Survey2}/> */}
          {/* <Route path='/survey2' render={() => <Survey2 changeState={this.props.changeState} escolha={'teste props 2'} />} />
          <Route path='/survey3' render={() => <Survey3 changeState={this.props.changeState} escolha={'teste props 3'} api={this.props.api} />} />
          <Route path='/all' render={() => <List data={this.props.data} api={this.props.api} />} />
          <Route path='/one/:id' render={(props) => <OneItem {...props} />} /> */}

        </Switch>
      </div>
    )
  }
}

export default Survey;