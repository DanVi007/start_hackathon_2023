import "./storage.css"
import arrow from "../imgs/rightArrow.png"
import plus from "../imgs/plus.png"
function Storage() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    // Define a function to fetch data from the Go API
    async function fetchData() {
      try {
        const response = await fetch("/storage"); // Replace with the actual API endpoint
        if (response.ok) {
          const data = await response.json();
          setIngredients(data);
        } else {
          console.error("BRUH");
        }
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
      }
    }

    // Call the fetchData function when the component mounts
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
        <select className="select" name="storagetype" id="storagetype">
          <img src={arrow} height={10} alt="Arrow" />
          <option className="dropdown-select" value="kjøleskap">
            Kjøleskap
          </option>
          <option className="dropdown-select" value="fryser">
            Fryser
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
        <h2>Ingredients:</h2>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient.ingredient_id}>
              {ingredient.storage_type} - {ingredient.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Storage;
