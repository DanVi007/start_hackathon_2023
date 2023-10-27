import "./storage.css"
import arrow from "../imgs/rightArrow.png"
import plus from "../imgs/plus.png"
function Storage() {
    return(
    <div>
        <h1>DINE VARER</h1>
        <hr />
        <div class="search-container">
  <form action="/search" method="get">
    <input type="text" name="q" placeholder="Search..." />
    <input type="submit" value="Search" />
  </form>
</div>

        <div class="buttons">
        <select class="dropdown-button"name="storagetype" id="storagetype">
        <img src={arrow} height={10}></img>
            <option class="dropdown-select" value="kjøleskap">Kjøleskap</option>
            <option class="dropdown-select"value="fryser">Fryser</option>
            <option class="dropdown-select"value="pantry">Pantry</option>
        </select>
        <button class="dropdown-button"id="leggtil"> <img src={plus} height={10}></img> Legg til</button>
        </div>  

    </div>
    );
}
export default Storage;