import axios from "axios";
async function GetAllRecipes() {
    try {
        const response = await axios.get("/recipes?type=all");
        if (response.data !== null) {
            return response.data
        } 
            return [];
        } catch (error) {
            console.error("Error fetching tasks:", error);
            return [];
        };
    }


export default GetAllRecipes;