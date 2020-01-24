import React, { Component } from 'react';

class Img extends Component {
  render() {

    const Img = {
      'marginTop': '20px',
      'marginBottom': '50px',
    }

    return (
      <div>
        <img style={Img} src={this.props.image} />
      </div >
    )
  }
}

export default Img;