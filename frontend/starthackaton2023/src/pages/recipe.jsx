import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import GetRecipeById from "../components/getRecipeById";
function Recipe() {
    let { id } = useParams();
    const [recipe, setRecipe] = useState([]);
    

    useEffect(() => {
        async function fetchRecipes() {
            try {
                const response = await GetRecipeById(id);
                setRecipe(response);
            } catch (error) {   
            console.error('Error fetching recipes:', error);
        }
    }

    fetchRecipes();
  }, [id]);
    return(
        <div>
            {recipe.id}
        </div>
    )
}

export default Recipe;