import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Survey from './survey';
import Survey2 from './survey2';
import Survey3 from './survey3';
import List from './listall';


class Home extends Component {
  render() {
    return (
      <div>
        <Link to='/survey'>Start Teste</Link>
        <Switch>
          <Route path='/survey' component={() => <Survey changeState={this.props.changeState} escolha={'teste props 1'}/>} />
          <Route path='/survey2' component={() => <Survey2 changeState={this.props.changeState} escolha={'teste props 2'}/>} />
          <Route path='/survey3' component={() => <Survey3 changeState={this.props.changeState} escolha={'teste props 3'} api={this.props.api}/>} />
          <Route path='/all' component={() => <List data={this.props.data}/>} />
        </Switch>
      </div>
    )
  }
}

export default Home;