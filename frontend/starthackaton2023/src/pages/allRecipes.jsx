import React, { useState, useEffect } from 'react';
import GetAllRecipes from '../components/getAllRecipes';
import FoodImage from '../imgs/testFoodImage.avif'
import { Link } from 'react-router-dom';
import FormatRecipes from '../components/formatRecipes';

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
        {FormatRecipes(allRecipes)}
      </div>
    </div>
  );
}

export default AllRecipes;
