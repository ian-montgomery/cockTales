import React from 'react'
import {getTale} from '../api'


class Results extends React.Component {
  state = {
    tale: ""
  }

  componentDidMount = () => {
    this.getAlcInfo(this.props.alcohol)
  }


  getAlcInfo = (alcohol) => {
    getTale(alcohol)
      .then(response => {
        this.setState({
          tale: response.tale
        })
      })
  }

  render () {
    return (
      <>
        <div className="age-test-center-div">
          <h1 className="card-title"> {this.props.alcohol} </h1>
          <p> {this.state.tale} </p>
        </div>
      </>
    )
  }
}


export default Results