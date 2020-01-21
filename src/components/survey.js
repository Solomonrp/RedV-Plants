import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Survey2 from './survey2'


class Survey extends Component {
  render() {

    const select = (event) => {
      this.props.changeState(event.target.name, event.target.text);
      console.log(event.target.name);
      console.log(event.target.text);
    }

    const execute = () => {

    }

    return (
      <div>
        <div>
          {/* <img>Img Principal</img> */}
        </div>
        <h3>Teste da tela</h3>
        <p>Sub Titulo colocar ternario para para checar se tem</p>
        <div>
          <a name='sun' value='pouca' onClick={select}>high</a>
          <a name='sun' value='media' onClick={select}>low</a>
        </div>
        <div>  
          <a name='sun' value='muita' onClick={select}>no</a>
        </div>
        <a>
          {/* <img>Teste</img> */}
          Btn1
        </a>
        <Link to='/home'>Back</Link>
        <Link to='/survey2'>Próximo</Link>

        <Switch>
          <Route path='/survey2' component={Survey2}/>
        </Switch>
      </div>
    )
  }
}

export default Survey;