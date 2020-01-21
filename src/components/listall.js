import React, {Component} from 'react';

class List extends Component {
  render() {
    return(
      <div>
        Teste
        {
          this.props.data.map((plant, index) => {
            return <a key={index}>{plant.name}</a>
          })
        }
      </div>
    )
  }
}

export default List;