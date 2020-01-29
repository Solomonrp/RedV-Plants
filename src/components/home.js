import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Survey from './survey';
import Survey2 from './survey2';
import Survey3 from './survey3';
import List from './listall';
import OneItem from './one';
import '../style/home.css';



class Home extends Component {
  render() {
    return (
      <div className='main'>
        <div className="text">
          <div className='logo_father'>
            <img className='logo' />
          </div>

          <div className="tittle">
            <a>Find your <br /> next green <br /> friend </a>
          </div>
        <div>

        </div>
          <Link className="startBtn" to='/survey'>start quizz</Link>
        </div>
      </div>
    )
  }
}

export default Home;