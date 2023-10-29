import axios from "axios";
async function GetRecommendedRecipes() {
    try {
        const response = await axios.get("/recipes?type=recommended");
        if (response.data !== null) {
            return response.data
        } 
            return [];
        } catch (error) {
            console.error("Error fetching tasks:", error);
            return [];
        };
    }


export default GetRecommendedRecipes;