import "./storage.css"
function Storage() {
    return(
    <div>
        <h1>DINE VARER</h1>
        <div class="buttons">
        <select class="dropdown-button"name="storagetype" id="storagetype">
            <option class="dropdown-select" value="kjøleskap">Kjøleskap</option>
            <option class="dropdown-select"value="fryser">Fryser</option>
            <option class="dropdown-select"value="pantry">Pantry</option>
        </select>
        <button class="dropdown-button"id="leggtil">Legg til</button>
        </div>  
    </div>
    );
}
export default Storage;