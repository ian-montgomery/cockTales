import React from 'react'
import {getTale, getRecipe, getCocktail} from '../api'



class Results extends React.Component {
  state = {
    tale: ""
  }

  componentDidMount = () => {
    this.getAlcInfo(this.props.alcohol)
    this.getCocktail(this.props.alcohol)
  }


  getAlcInfo = (alcohol) => {
    getTale(alcohol)
      .then(response => {
        this.setState({
          tale: response.tale
        })
      })
  }

  getRecipe = (alcohol) => {
    getRecipe
  }

  getCocktail = (alcohol) => {
    getCocktail(alcohol)
      .then((res) => console.log(res))
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