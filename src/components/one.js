import React, { Component } from 'react';
import axios from 'axios';
import '../style/oneplant.css';
import HWSun from '../assets/icons/grey/high-sun.png';
import LWSun from '../assets/icons/grey/low-sun.png';
import NWSun from '../assets/icons/grey/no-answer.svg';
import HWDrops from '../assets/icons/grey/three-drops.png';
import MWDrops from '../assets/icons/grey/two-drops.png';
import NWDrops from '../assets/icons/grey/one-drop.png';
import Dog from '../assets/icons/grey/pet.svg';
import Toxic from '../assets/icons/grey/toxic.svg';
import logo from '../assets/logo/logo-greenthumb.svg';
import send from '../assets/illustrations/envelop.png'

class OneItem extends Component {

  state = {
    data: {},
    // data: { "id": 1, "name": "Euphorbia eritrea", "sun": "medium", "water": "rarely", "url": "https://front-static-recruitment.s3.amazonaws.com/euphorbia-eritrea.jpg", "price": 25, "toxicity": false },
    form: 0,
    email: null,
    name: null,
    errorEmail: ''
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    axios.get(`https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service/plant?id=${this.props.match.params.id}`)
      .then(response => {
        this.setState({ data: response.data })
      })
    this.props.changeState('id',this.props.match.params.id);
    console.log(this.state.data);
  }

  validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);


  handleformSubmit = (event) => {
    event.preventDefault();
    this.props.send();
    this.setState({ form: '1' })
    let errors = '';
    errors = this.validEmailRegex.test(this.state.email)
      ? ''
      : 'Please provide a valid e-mail'
    this.setState({
      errorEmail: errors
    })
    console.log(errors)
  }

  render() {

    const sendForm = (event) => {
      this.setState({
        email: event.target.value,
      })
      if(this.state.errorEmail.length > 0) {
        console.log('erro');
      }else {
        this.props.changeState(event.target.name, event.target.value);
      }
    }

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
            {this.state.form === 0 ?
              <div>
                <div className="first_son_second_son_wrapper">
                  <h1>Nice pick!</h1>
                  <p>Tell us your name and e-mail <br /> and we will get in touch <br />regarding your order ;) </p>
                </div>
                <form className="second_son_second_son_wrapper" onSubmit={this.handleformSubmit}>
                  
                  <label>Name</label><br />
                  <input className='input_second_son_second_son_wrapper' name='name' type='text' placeholder='Crazy Plant Person' onChange={sendForm} />
                  <br />
                  {
                    this.state.errorEmail.length > 0 ?
                      <div>
                        <label className="errors">E-mail</label>
                        <input className='input_second_son_second_son_wrapper errorInput' name='email' type='text' value={this.state.email} onChange={sendForm} />
                        <span className='error'>{this.state.errorEmail}</span>
                      </div>
                      :
                      <div>
                        <label>E-mail</label> <br />
                        <input className='input_second_son_second_son_wrapper' name='email' type='text' placeholder='plantperson@email.com' onChange={sendForm} />
                      </div>
                  }
                  <input className="send_second_son_second_son_wrapper" type='submit' value="send" />
                </form>
              </div>
              :
              <div>
                <div className="first_son_second_son_wrapper">
                  <h1>Thank you!</h1>
                  <p className='confirmationEmail'>You will hear from us soon. Please  <br /> check your e-mail! </p>
                </div>
                <div>
                  <img className="envelope" src={send} width="170px" />
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default OneItem;