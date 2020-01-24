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
      // 'background-image': 'url(../assets/icons/coral/low-sun.svg)'
    }

    return (
      <React.Fragment>
        <a className="btn-clean" name={this.props.name} value={this.props.value} onClick={handler}>
          <img className="imgbtn1" style={imgMain} src={this.props.image} name={this.props.name} teste={this.props.value}/><br />
          {this.props.children}</a>
        {/* CADA COMPONENTE BOTÃO TER UMA CSS CLASSES COM IMAGEM PARA FAZER O TOUGLE  */}
      </React.Fragment>
    )
  }
}

export default Button;