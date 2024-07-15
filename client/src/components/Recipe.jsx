import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getRecipes } from '../services/RecipeService';
import "../App.css";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
   let mounted = true;
   getRecipes()
     .then(data => {
       if(mounted) {
         setRecipes(data)
       }
     })
   return () => mounted = false;
 }, [])

  return(
   <div className="container-fluid side-container">
   <div className="row side-row" >
    <p id="before-table"></p>
        <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
        <thead>
            <tr>
            
            <th>Recipe Name</th>
            <th>Preparation Time</th>
            <th>Ingredients</th>
            <th>Instructions</th>
            </tr>
        </thead>
        <tbody>
            {recipes.map((recipe) =>
            <tr key={recipe.recipeId}>
                <td>{recipe.recipeName}</td>
                <td>{recipe.time}</td>
                <td>{recipe.ingredients}</td>
                <td>{recipe.instructions}</td>
            </tr>)}
        </tbody>
    </Table>
    </div>
  </div>
  );
};

export default Recipe;