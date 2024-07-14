import axios from 'axios';

export function getRecipes() {
  return axios.get('http://127.0.0.1:8000/recipes/')
    .then(response => response.data)
}

  