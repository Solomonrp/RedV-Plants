import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Survey from './survey';
import Survey2 from './survey2';
import Survey3 from './survey3';
import List from './listall';
import OneItem from './one';
import '../home.css';


class Home extends Component {
  render() {
    return (
      <div className='main'>
        <div className="text">
          <div>
            <img className='logo' />
          </div>

          <div>
            <a>Find your <br /> next green <br /> friend </a>
          </div>
          {
            console.log(this.props.changeState)
          }

          <Link to='/survey'>Start Teste</Link>
        </div>

        <Switch>
          {/* <Route path='/survey' render={(props) => <Survey {...props} escolha={'teste props 1'} />} /> */}
          {/* <Route path='/survey2' render={() => <Survey2 changeState={this.props.changeState} escolha={'teste props 2'} />} />
          <Route path='/survey3' render={() => <Survey3 changeState={this.props.changeState} escolha={'teste props 3'} api={this.props.api} />} />
          <Route path='/all' render={() => <List data={this.props.data} api={this.props.api} />} />
          <Route path='/one/:id' render={(props) => <OneItem {...props} />} /> */}
        </Switch>
      </div>
    )
  }
}

export default Home;