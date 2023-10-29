import axios from "axios";
async function GetRecipeById(id) {
    try {
        const response = await axios.get("/recipes?id=" + id);
        if (response.data !== null) {
            console.log(response.data)
            return response.data
        } 
        } catch (error) {
            console.error("Error fetching tasks:", error);
            return [];
        };
}

export default GetRecipeById;