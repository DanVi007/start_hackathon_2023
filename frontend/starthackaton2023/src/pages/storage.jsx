import React, { useState, useEffect } from "react";
import "./storage.css";
import arrow from "../imgs/rightArrow.png";
import plus from "../imgs/plus.png";

function Storage() {
  const [ingredients, setIngredients] = useState([]);
  const [selectedStorageType, setSelectedStorageType] = useState("refridgerator"); // Default value

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

  return (
    <div>
      <h1 id="title">DINE VARER</h1>
      <hr className="custom-hr" />
      <div className="container">
        <input type="text" className="search-field" placeholder="Søk etter varer..." />
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
          <option className="dropdown-select" value="refridgerator">
          Refridgerator
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
      <div className="ingredient-list">
      {ingredients.filter((ingredient) => ingredient === 1000).map((ingredient) => (
            <button className="ingredient-button">
              {ingredient.name} - {ingredient.quantity}
            </button>
          ))}
      </div>
    </div>
  );

  
}

export default Storage;
