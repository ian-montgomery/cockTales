import request from 'superagent'

//api url for cocktail recipes
const cocktailURL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='
const recipeURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
const taleURL = '/api/drinks/'


//functions 

//external
export function getCocktail (alcohol) {
    return request
    .get(cocktailURL + alcohol)
    .then (response => response.body.idDrink)
    .then (idDrink => getRecipe(idDrink))
    }


export function getRecipe (id) {
    return request
    .get(recipeURL + id)
    .then (response => response.body)
}



//local
export function getTale (alcohol) {
  console.log("getTale called")
    return request
    .get(taleURL + alcohol)
    .then(response => response.body)
}