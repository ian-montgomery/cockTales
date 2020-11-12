import React from 'react'
import {getTaleApi, getRecipeApi, getCocktailApi} from '../api'



class Results extends React.Component {
  state = {
    tale: "",
    cocktail: {},
    recipeData: {},
  }

  componentDidMount = () => {
    this.getTale(this.props.alcohol)
    this.getCocktail(this.props.alcohol)
  }


  getTale = (alcohol) => {
    getTaleApi(alcohol)
      .then(response => {
        this.setState({
          tale: response.tale
        })
      })
  }



  getCocktail = (alcohol) => {
    getCocktailApi(alcohol)
      .then((res) => {
        console.log(res)
        this.setState({cocktail: res})
      })
      .then(() => {
        this.getRecipe(this.state.drink.idDrink)
      })
  }

  getRecipe = (id) => {
    getRecipeApi(id)
      .then(res => {
        console.log(res)
        this.setstate({recipeData: res})
      })
  }

  

  render () {
    return (
      <>
        <div className="age-test-center-div">
          <h1 className="card-title"> {this.props.alcohol} </h1>
          <p> {this.state.tale} </p>
          <p> {this.state.cocktail.strDrink} </p>
          <img src={this.state.cocktail.strDrinkThumb}/> 
        </div>
      </>
    )
  }
}


export default Results