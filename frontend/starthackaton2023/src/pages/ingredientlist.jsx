import React, { useState, useEffect } from 'react';

function IngredientList() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    // Fetch data from your Go API
    fetch('/storage')  // Replace with your API endpoint
      .then(response => response.json())
      .then(data => setIngredients(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Ingredients List</h1>
      <ul>
        {ingredients.map(ingredient => (
          <li key={ingredient.IngredientId}>
            {ingredient.StorageType} - {ingredient.Quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientList;
