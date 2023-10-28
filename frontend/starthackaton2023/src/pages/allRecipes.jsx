import React, { useState, useEffect } from 'react';
import GetAllRecipes from '../components/getAllRecipes';
import FoodImage from '../imgs/testFoodImage.avif'
import { Link } from 'react-router-dom';

function AllRecipes() {
  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await GetAllRecipes();
        setAllRecipes(response);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    }

    fetchRecipes();
  }, []);

  function GetAllRecipesFormated() {
    var recipeArray = []
    var tempArray = []
    {Array.isArray(allRecipes) && allRecipes.map((recipe, index)=>{
        // Render your recipe data here
        tempArray.push(
            <div style={{marginRight: "50%"}} key={recipe.id}>
                <Link to ={"/recipe?id="+recipe.id}>
                    <img style={{borderRadius: "10%"}} width="100px" src = {FoodImage}/>
                </Link>
                <div>{recipe.name}</div>
                
            </div>
        )
        if (index%2 === 1 || (index === allRecipes.length-1 && index%2 === 0)) {
            recipeArray.push(<><br/><div key = {index} style = {{display: "flex", width:"100px"}}>{tempArray}</div></>);
            tempArray=[]
        }
    })
  }
  return recipeArray;
}

  return (
    <div>
      <h1>Oppskrifter</h1>
      <hr />
      <div className="search-container">
        <form action="/search" method="get">
          <input type="text" name="q" placeholder="Search..." />
          <input type="submit" value="Search" />
        </form>
      </div>
      <div>
        {GetAllRecipesFormated()}        
      </div>
    </div>
  );
}

export default AllRecipes;
