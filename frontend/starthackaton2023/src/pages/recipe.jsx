import { useState, useEffect } from "react";
import FoodImage from '../imgs/testFoodImage.avif'
import GetRecipeById from "../components/getRecipeById";
function Recipe() {
    const id = new URLSearchParams(window.location.search).get("id");
    console.log("id: " + id)
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
  }, []);
    return(
        <div>
            <div style={{ marginRight: "50%" }} key={recipe.id}>
                <img
                    alt="food"
                    style={{ marginTop:"-30%", marginLeft:"-27%" }}
                    width="400px"
                    src={FoodImage}
                />
            <div>{recipe.name}</div><br/>
            <div>Ingredient list...</div>
          </div>
        </div>
    )
}

export default Recipe;