import React, { Component } from 'react';
// import '../style/button.css';

class Button extends Component {
  render() {

    const handler = (event, props) => {
      this.props.changeState(event.target.name, event.target.text);
    }

    return (
      <React.Fragment>
        <a className="btn-clean" name={this.props.name} value={this.props.value} onClick={handler}>{this.props.children}</a>
      </React.Fragment>
    )
  }
}

export default Button;