import request from 'superagent'

//api url for cocktail recipes
const cocktailURL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='
const recipeURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
const taleURL = '/api/drinks/'


//functions 

//external
export function getCocktailApi (alcohol) {
  return getCocktailsList(alcohol)
    .then (drinksArr => {
      return (drinksArr[getRandomInt(drinksArr.length)])
    })
    }

function getCocktailsList (alcohol) {
  return request
    .get(cocktailURL + alcohol)
    .then (response => response.body.drinks)
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}


export function getRecipeApi (id) {
  return request
    .get(recipeURL + id)
    .then (response => response.body.drinks[0])
}



//local
export function getTaleApi (alcohol) {
    return request
    .get(taleURL + alcohol)
    .then(response => response.body)
}