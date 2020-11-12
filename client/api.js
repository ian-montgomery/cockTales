import request from 'superagent'

//api url for cocktail recipes
const cocktailURL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='
const recipeURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
const taleURL = '/api/drinks/'


//functions 
export function getCocktail (alcohol) {
    return request
    .get(cocktailURL)
    .then (response => response.body.idDrink)
    .then (idDrink => getRecipe(idDrink))
    }


export function getRecipe (id) {
    return request
    .get(recipeURL + id)
    .then (response => response.body)
}

export function getTale (alcohol) {
    return request
    .get(taleURL + alcohol)
    .then(response => response.body)
}