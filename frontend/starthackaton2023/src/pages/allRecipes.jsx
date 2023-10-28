import GetAllRecipes from "../components/getAllRecipes";
import { useState } from "react";

function AllRecipes() {
    const [allRecipes, setAllRecipes] = useState([])
    if (allRecipes.length===0) {
        const recipeArray = GetAllRecipes()
        console.log(recipeArray)
        setAllRecipes([...recipeArray])
    }

    return(
        <div>
            <h1>Oppskrifter</h1>
            <hr />
            <div class="search-container">
                <form action="/search" method="get">
                    <input type="text" name="q" placeholder="Search..." />
                    <input type="submit" value="Search" />
                </form>
            </div>
            <div>
                {allRecipes}
            </div>
        </div>
    )

}

export default AllRecipes;