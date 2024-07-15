import { useEffect, useState } from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar } from 'react-bootstrap';
// import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { getRecipes, deleteRecipe } from '../services/RecipeService';
import AddRecipeModal from "./AddRecipeModal";


const Manage = () => {
    const [recipes, setRecipes] = useState([]);
    const [addModalShow, setAddModalShow] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        let mounted = true;
        if(recipes.length && !isUpdated) {
         return;
         }
        getRecipes()
          .then(data => {
            if(mounted) {
              setRecipes(data);
            }
          })
        return () => {
           mounted = false;
           setIsUpdated(false);
        }
      }, [isUpdated, recipes])

    //   const handleUpdate = (e, stu) => {
    //     e.preventDefault();
    //     setEditModalShow(true);
    //     setEditStudent(stu);
    // };

    const handleAdd = (e) => {
        e.preventDefault();
        setAddModalShow(true);
    };
    
    const handleDelete = (e, recipeId) => {
        if(window.confirm('Are you sure ?')){
            e.preventDefault();
            deleteRecipe(recipeId)
            .then((result)=>{
                alert(result);
                setIsUpdated(true);
            },
            (error)=>{
                console.log(error)
                alert("Failed to Delete Student");
            })
        }
    };

    let AddModelClose=()=>setAddModalShow(false);
    
    return(
        <div className="container-fluid side-container">
        <div className="row side-row" >
        <p id="manage"></p>
            <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
                <thead>
                <tr>
                  
                  <th>Recipe</th>
                  <th>Time</th>
                  <th>Ingredients</th>
                  <th>Instructions</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                  { recipes.map((recipe) =>
    
                  <tr key={recipe.recipeId}>
                  <td>{recipe.recipeName}</td>
                  <td>{recipe.time}</td>
                  <td>{recipe.ingredients}</td>
                  <td>{recipe.instructions}</td>
                  
                  <td>
    
                  <Button className="mr-2" variant="danger"
                    onClick={event => handleDelete(event,recipe.recipeId)}>
                        <RiDeleteBin5Line />
                  </Button>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  {/* <Button className="mr-2"
                    onClick={event => handleUpdate(event,stu)}>
                        <FaEdit />
                  </Button> */}
                 
                </td>
                </tr>)}
              </tbody>
            </Table>
            <ButtonToolbar>
                <Button variant="primary" onClick={handleAdd}>
                Add Recipe
                </Button>
                <AddRecipeModal show={addModalShow} setUpdated={setIsUpdated}
                onHide={AddModelClose}></AddRecipeModal>
            </ButtonToolbar>
        </div>
        </div>
    );
    
    
};

export default Manage;