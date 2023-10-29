import FoodImage from '../imgs/testFoodImage.avif'
import { Link } from 'react-router-dom';
function FormatRecipes(recipes) {
  var recipeArray = [];
  var tempArray = [];
    Array.isArray(recipes) &&
      recipes.map((recipe, index) => {
        // Render your recipe data here
        tempArray.push(
          <div style={{ marginRight: "50%" }} key={recipe.id}>
            <Link to={"/recipe?id="+recipe.id}>
              <img
              alt="food"
                style={{ borderRadius: "10%" }}
                width="100px"
                src={FoodImage}
              />
            </Link>
            <div>{recipe.name}</div>
          </div>,
        );
        if (
          index % 2 === 1 ||
          (index === recipes.length - 1 && index % 2 === 0)
        ) {
          recipeArray.push(
            <>
              <br />
              <div key={index} style={{ display: "flex", width: "100px" }}>
                {tempArray}
              </div>
            </>,
          );
          tempArray = [];
        }
      });
  return recipeArray;
}

export default FormatRecipes;
