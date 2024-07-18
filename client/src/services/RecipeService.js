import axios from 'axios';

export function getRecipes() {
  return axios.get('http://127.0.0.1:8000/recipes/')
    .then(response => response.data)
}

export function addRecipe(recipe){
  return axios.post('http://127.0.0.1:8000/recipes/', {
    recipeId:null,
    recipeName:recipe.recipeName.value,
    time:recipe.time.value,
    ingredients:recipe.ingredients.value,
    instructions:recipe.instructions.value
    
  })
    .then(response=>response.data)
}

export function deleteRecipe(recipeId) {
  return axios.delete('http://127.0.0.1:8000/recipes/' + recipeId + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}