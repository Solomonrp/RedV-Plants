import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import '../style/listall.css';
import Hand from '../assets/illustrations/pick.png';


class List extends Component {

  // componentDidMount () {
  //   this.props.api();
  // }


  render() {
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
                <span>
                  {plant.name}
                  <br />
                  <span>
                    ${plant.price}
                  </span>
                <br />
                </span>
                <span>
                  <Link className="buyBtn" to={`/one/${plant.id}`} key={index}>buy now</Link>
                </span>
              </div>
            })

          }
        </div>
      </div>
    )
  }
}

export default List;