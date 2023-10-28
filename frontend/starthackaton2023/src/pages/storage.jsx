import "./storage.css"
import arrow from "../imgs/rightArrow.png"
import plus from "../imgs/plus.png"
function Storage() {
    return(
    <div>
        <h1 id="title">DINE VARER</h1>
        <hr class="custom-hr"/>
        <div class="container">
            <input type="text" class="search-field" placeholder="Søk etter varer..."/>
        </div>
        <div class="buttons">
        <select class="select"name="storagetype" id="storagetype">
        <img src={arrow} height={10}></img>
            <option class="dropdown-select" value="kjøleskap">Kjøleskap</option>
            <option class="dropdown-select"value="fryser">Fryser</option>
            <option class="dropdown-select"value="pantry">Pantry</option>
        </select>
        <button class="button"id="knapp" > <img src={plus} height={10}></img> Legg til</button>
        </div>  

    </div>
    );
}
export default Storage;