import request from 'superagent'

//api url for cocktail recipes
const cocktailURL = ''
const taleURL = ''


//functions 
export function getCocktailRecipe () {
    return request
    .get(cocktailURL)
    .then (response => response.body)
}

export function getTale (alcohol) {
    return request
    .get(taleURL)
    .then(response => response.body)
}