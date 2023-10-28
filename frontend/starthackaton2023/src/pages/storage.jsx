import React, { useState, useEffect } from "react";
import "./storage.css";
import arrow from "../imgs/rightArrow.png";
import plus from "../imgs/plus.png";

function Storage() {
  const [ingredients, setIngredients] = useState([]);
  const [selectedStorageType, setSelectedStorageType] = useState("refrigerator");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
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
    }
    fetchData();
  }, []);

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
            Refrigerator
          </option>
          <option className="dropdown-select" value="freezer">
            Freezer
          </option>
          <option className="dropdown-select" value="pantry">
            Pantry
          </option>
        </select>
            <button className="button" id="knapp">
            <img src={plus} height={10} alt="Plus" />
            Legg til
            </button>
      </div>
      <br />
      <div className="ingredient-list">
        {filteredIngredients.map((ingredient) => (
          <div className="ingredient-button" key={ingredient.id}>
            {ingredient.name} - {ingredient.quantity}
            <button id="plus-button"class="small-button">+</button>
            <button id="minus-button" class="small-button">-</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Storage;
