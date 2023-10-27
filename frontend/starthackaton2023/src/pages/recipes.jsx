import "./recipes.css"
import RightArrow from "../imgs/rightArrow.png"
function Recipes() {
    return(
        <div>
            <h1>Oppskrifter</h1>
            <div class="grid">
                <button class="grid-item">Middag</button>
                <button class="grid-item">Lunsj</button>
                <button class="grid-item">Bakeverk</button>
                <button class="grid-item">Vegetar</button>
            </div>

            <div>
                <p style="display: inline-block;">Alle oppskrifter</p>
                <img src={RightArrow} alt="right_arrow" height="60" style="display: inline-block;"/>
            </div>


        </div>
    )
}
export default Recipes;