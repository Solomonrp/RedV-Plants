import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Survey from './survey';
import Survey3 from './survey3';


class Survey2 extends Component {
  render() {

    const select = (event) => {
      this.props.changeState(event.target.name, event.target.text);
      console.log(event.target.name);
      console.log(event.target.text);
    }

    return (
      <div>
      <a>Teste</a>
      <a>{this.props.escolha}</a>

      <div>
          <a name='water' value='pouca' onClick={select}>daily</a>
          <a name='water' value='media' onClick={select}>regularly</a>
        </div>
        <div>  
          <a name='water' value='muita' onClick={select}>rarely</a>
        </div>

      <Link to='/survey'>Back</Link>
        <Link to='/survey3'>Próximo</Link>

        <Switch>
          <Route path='/survey3' component={Survey3}/>
        </Switch>
      </div>
    )
  }
}

export default Survey2;