import React, { useState, useEffect } from 'react';
import GetAllRecipes from '../components/getAllRecipes';
import FoodImage from '../imgs/testFoodImage.avif'
import { Link } from 'react-router-dom';
import FormatRecipes from '../components/formatRecipes';
import SearchBar from "../components/searchBar";

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
            <div class="search-container">
                <SearchBar placeholder={"Søk etter oppskrifter..."}/>
            </div>
        </div>
        <div>
            {FormatRecipes(allRecipes)}
        </div>
    </div>
  );
}

export default AllRecipes;
