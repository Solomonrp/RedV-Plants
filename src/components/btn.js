import React, { Component } from 'react';
import '../style/button.css';



class Button extends Component {
  render() {

    const handler = (event, props) => {
      console.log(event.target.name)
      console.log(event.currentTarget.text)
      this.props.changeState(event.currentTarget.name, event.currentTarget.text);
      this.props.touch(event.currentTarget.text);
    }

    const imgMain = {
      'background': this.props.color,
      'color' : this.props.white
    }

    return (
      <React.Fragment>
        <a className="btn-clean" style={imgMain} name={this.props.name} value={this.props.value} onClick={handler}>
          <img className="imgbtn1" src={this.props.image} name={this.props.name} teste={this.props.value}/><br />
          {this.props.children}</a>
      </React.Fragment>
    )
  }
}

export default Button;