import React, { Component } from 'react';
import axios from 'axios';

class OneItem extends Component {

  state = {
    data: 'Loading',
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    axios.get(`https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service/plant?id=${this.props.match.params.id}`)
      .then(response => {
        this.setState({ data: response.data })
      })
    console.log(this.state.data);
  }

  render() {
    return (
      <div>
        {this.state.data.name}
      </div>
    )
  }
}

export default OneItem;