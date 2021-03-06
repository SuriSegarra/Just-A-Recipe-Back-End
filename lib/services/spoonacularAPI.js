const request = require('superagent');
require('dotenv').config();

// Use an object and destructure for named params instead
function fetchRecipes({ searchQuery = '', offset = 0, intolerances = '', perPage = 28 }) {
  return request
    .get(`https://api.spoonacular.com/recipes/search?query=${searchQuery}&number=${perPage}&apiKey=${process.env.API_KEY}&offset=${offset}&intolerances=${intolerances}`)
    .then(res => res.body.results);
}

function fetchSimilarRecipes(id) {
  return request
    .get(`https://api.spoonacular.com/recipes/${id}/similar?apiKey=${process.env.API_KEY}`)
    .then(res => res);
}

function fetchRecipe(id) {
  return request
    .get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.API_KEY}`)
    .then(res => res.body);
}

module.exports = {
  fetchRecipes, fetchRecipe, fetchSimilarRecipes
};
