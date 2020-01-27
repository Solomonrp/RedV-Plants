import React, { Component } from 'react';
import axios from 'axios';
import '../style/oneplant.css'
import HWSun from '../assets/icons/white/high-sun.svg';
import LWSun from '../assets/icons/white/low-sun.svg';
import NWSun from '../assets/icons/white/no-answer.svg';
import HWDrops from '../assets/icons/white/three-drops.svg';
import MWDrops from '../assets/icons/white/two-drops.svg';
import NWDrops from '../assets/icons/white/one-drop.svg';
import Dog from '../assets/icons/grey/pet.svg';
import Toxic from '../assets/icons/grey/toxic.svg';
import logo from '../assets/logo/logo-greenthumb.svg';

class OneItem extends Component {

  state = {
    data: { "id": 1, "name": "Euphorbia eritrea", "sun": "medium", "water": "rarely", "url": "https://front-static-recruitment.s3.amazonaws.com/euphorbia-eritrea.jpg", "price": 25, "toxicity": false },
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    // axios.get(`https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service/plant?id=${this.props.match.params.id}`)
    //   .then(response => {
    //     this.setState({ data: response.data })
    //   })
    console.log(this.state.data);
  }




  render() {

    document.body.style = 'background: white;';

    const sun = {
      high: <li> <img src={HWSun} width="35px;" height="35px" /><a>High sunlight</a></li>,
      medium: <li> <img src={LWSun} width="35px;" height="35px" /><a>Low sunlight </a></li>,
      no: <li> <img src={NWSun} width="35px;" height="35px" /> <a>No sunlight</a></li>
    }
    const water = {
      daily: <li> <img src={HWDrops} width="35px;" height="35px" /><a>Rarely</a></li>,
      regularly: <li> <img src={MWDrops} width="35px;" height="35px" /><a>Regularly</a></li>,
      rarely: <li> <img src={NWDrops} width="35px;" height="35px" /><a>Daily</a></li>
    }

    const pets = {
      true: <li> <img src={Toxic} width="35px;" height="35px" /> <a><b>Beware!</b> Toxic for pets</a></li>,
      false: <li> <img src={Dog} width="35px;" height="35px" /> <a>Non-toxic for pets</a></li>
    }

    return (
      <div className="wrapper1">
        <div className="wrapper1_son">
          <img src={logo} />
          <hr size="250" />
        </div>
        <div className="wrappers">
          <div className="first_son_Wrapper">
            <div className="first_son_wrapper_son">
              <h1>{this.state.data.name}</h1>
              <a>${this.state.data.price}</a>
            </div>
            <div>
              <img src={this.state.data.url} width="200px;" />
            </div>
            <ul className="ul_first_wrapper_son">
              {sun[this.state.data.sun]}
              {water[this.state.data.water]}
              {pets[this.state.data.toxicity]}
            </ul>
          </div>
          <div className="second_son_Wrapper">
            <div className="first_son_second_son_wrapper">
              <h1>Nice pick!</h1>
              <p>Tell us your name and e-mail <br /> and we will get in touch <br />regarding your order ;) </p>
            </div>
            <form className="second_son_second_son_wrapper">
              <label>Name</label><br />
              <input className='input_second_son_second_son_wrapper' type='text' placeholder='Crazy Plant Person' />
              <br />
              <label>E-mail</label><br />
              <input className='input_second_son_second_son_wrapper' type='text' placeholder='plantperson@email.com' />
              <input className="send_second_son_second_son_wrapper" type='submit' value="send" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default OneItem;