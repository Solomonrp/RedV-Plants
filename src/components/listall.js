import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import '../style/listall.css';
import Hand from '../assets/illustrations/pick.png';
import HWSun from '../assets/icons/grey/high-sun.png';
import LWSun from '../assets/icons/grey/low-sun.png';
import NWSun from '../assets/icons/grey/no-answer.svg';
import HWDrops from '../assets/icons/grey/three-drops.png';
import MWDrops from '../assets/icons/grey/two-drops.png';
import NWDrops from '../assets/icons/grey/one-drop.png';
import Dog from '../assets/icons/grey/pet.svg';
import Toxic from '../assets/icons/grey/toxic.svg';
import logo from '../assets/logo/logo-greenthumb.svg';

class List extends Component {

  // componentDidMount () {
  //   this.props.api();
  // }


  render() {

    const sun = {
      high: <img src={HWSun} width="25px;" height="25px" />,
      medium: <img src={LWSun} width="25px;" height="25px" />,
      no: <img src={NWSun} width="25px;" height="25px" />
    }
    const water = {
      daily:  <img src={HWDrops} width="25px;" height="25px" />,
      regularly:  <img src={MWDrops} width="25px;" height="25px" />,
      rarely: <img src={NWDrops} width="25px;" height="25px" />
    }

    const pets = {
      true: <img src={Toxic} width="25px;" height="25px" />,
      false: <img src={Dog} width="25px;" height="25px" /> 
    }

    return (
      <div>
        <img className='hand' src={Hand} />

        <h1>Our picks for you</h1>

        <div className="wrapper">
          {
            this.props.data.map((plant, index) => {
              return <div className="as" key={index}>
                <img className="plants" src={plant.url} />
                <br />
                <div className="plants_first_son">
                  <div>
                  <a>{plant.name}</a>
                  </div>
                  {/* <br /> */}
                  <div className="plants_second_son">
                    <a>${plant.price}</a>
                    <div className="plants_sibilin">
                      {sun[plant.sun]}
                      {water[plant.water]}
                      {pets[plant.toxicity]}
                    </div>
                  </div>
                <br />
                </div>
                <br />
                <div>
                  <Link className="buyBtn" to={`/one/${plant.id}`} key={index}>buy now</Link>
                </div>
              </div>
            })

          }
        </div>
      </div>
    )
  }
}

export default List;