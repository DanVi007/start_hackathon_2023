import React, { useState, useEffect } from "react";
import "./storage.css";
import arrow from "../imgs/rightArrow.png";
import plus from "../imgs/plus.png";

function Storage() {
  const [ingredients, setIngredients] = useState([]);
  const [selectedStorageType, setSelectedStorageType] = useState("refrigerator");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    try {
        const response = await fetch("/storage");
        if (response.ok) {
            const data = await response.json();
            setIngredients(data);
        } else {
            console.error("Failed to fetch data from the API");
        }
    } catch (error) {
        console.error("An error occurred while fetching data:", error);
    }
};

useEffect(() => {
    fetchData();
}, []);

const handleIngredientUpdate = async (ingredientName, quantityChange) => {
    try {
        const response = await fetch("/storage", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ingredientName,
                quantityChange,
            }),
        });
console.log(ingredientName)
console.log(quantityChange)
        if (response.ok) {
            // Successfully updated ingredient quantity, you can update the state or perform a refetch.
            fetchData(); // Refetch data
        } else {
            console.error("Failed to update ingredient quantity");
        }
    } catch (error) {
        console.error("An error occurred while updating ingredient quantity:", error);
    }
};

  // Filter the ingredients based on the selected storage type and search query
  const filteredIngredients = ingredients.filter((ingredient) => {
    const storageTypeMatches = ingredient.storageType.toLowerCase() === selectedStorageType;
    const nameMatches = searchQuery === "" || ingredient.name.toLowerCase().includes(searchQuery);
    return storageTypeMatches && nameMatches;
  });

  return (
    <div>
      <h1 id="title">DINE VARER</h1>
      <hr className="custom-hr" />
      <div className="container">
        <input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          className="search-field"
          placeholder="Søk etter varer..."
        />
      </div>
      <div className="buttons">
        <select
          className="select"
          name="storagetype"
          id="storagetype"
          onChange={(e) => setSelectedStorageType(e.target.value)}
          value={selectedStorageType}
        >
          <img src={arrow} height={10} alt="Arrow" />
          <option className="dropdown-select" value="refrigerator">
            Kjøleskap
          </option>
          <option className="dropdown-select" value="freezer">
            Fryser
          </option>
          <option className="dropdown-select" value="pantry">
          Spiskammer
          </option>
        </select>
            <button className="button" id="knapp">
            <img src={plus} height={10} alt="Plus" />
            Scan kvittering
            </button>
      </div>
      <br />
      <div className="ingredient-list">
                {filteredIngredients.map((ingredient) => (
                    <div className="ingredient-button" key={ingredient.id}>
                        {ingredient.name} - {ingredient.quantity} ~ {ingredient.quantitytype}
                        <button
                            id="plus-button"
                            className="small-button"
                            onClick={() => handleIngredientUpdate(ingredient.name, 1)}
                        >
                            +
                        </button>
                        <button
                            id="minus-button"
                            className="small-button"
                            onClick={() => handleIngredientUpdate(ingredient.name, -1)}
                        >
                            -
                        </button>
                    </div>
                ))}
            </div>
    </div>
  );
}

export default Storage;
