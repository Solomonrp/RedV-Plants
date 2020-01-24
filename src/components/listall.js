import React, {Component} from 'react';
import  { Route, Switch, Link }  from 'react-router-dom';

class List extends Component {

  // componentDidMount () {
  //   this.props.api();
  // }

  
  render() {
    return(
      <div>
        Teste
        {
          this.props.data.map((plant, index) => {
            return <Link to={`/one/${plant.id}`} key={index}>{plant.name}</Link>
          })
        }
      </div>
    )
  }
}

export default List;