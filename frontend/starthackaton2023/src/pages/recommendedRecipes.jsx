import { useEffect, useState } from "react";
import SearchBar from "../components/searchBar";
import "./recommendedRecipes.modules.css";
import GetAllRecipes from "../components/getAllRecipes";
import FormatRecipes from "../components/formatRecipes";

function RecommendedRecipes() {
    const [recommendedRecipes, setRecommendedRecipes] = useState([]);

    useEffect(() => {
        async function fetchRecipes() {
            try {
                const response = await GetAllRecipes();
                setRecommendedRecipes(response);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        }
        fetchRecipes();
    }, []);
  return (
    <div>
      {/* <i class="ri-arrow-left-s-line"></i> */}
      <h1>OPPSKRIFTER</h1>
      <hr />
      <SearchBar placeholder="Anbefalte oppskrifter" />
      <br/>
      <div>
        {FormatRecipes(recommendedRecipes)}
      </div>
    </div>
  );
}

export default RecommendedRecipes;
