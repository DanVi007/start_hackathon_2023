import "./recipes.css"
import GreenRightArrow from "../imgs/greenRightArrow.png"
import AllRecipes from "./allRecipes"
import { Link } from 'react-router-dom';
function Recipes() {    
    return(
        <div>
            <h1>Oppskrifter</h1>
            <hr />
            <div class="search-container">
                <form action="/search" method="get">
                    <input type="text" name="q" placeholder="Search..." />
                    <input type="submit" value="Search" />
                </form>
            </div>
            <div class="grid">
                <button class="grid-item">Middag</button>
                <button class="grid-item">Lunsj</button>
                <button class="grid-item">Bakeverk</button>
                <button class="grid-item">Vegetar</button>
            </div>
            <br/><br/><br/>

            <div style={{ display: "flex", alignItems: "center", border: "solid 1px", height: "40px" }}>
                <p style={{ margin: 0 }}>Alle oppskrifter</p>
                <div style={{ marginLeft: "auto" }}>
                    <Link to = "/allRecipes" className = "nav-link">
                        <img src={GreenRightArrow} alt="right_arrow" width="50" height="35" style={{ marginLeft: "auto" }} />
                    </Link>
                </div>
            </div>
            <br/>
            <div style={{ display: "flex", alignItems: "center", border: "solid 1px", height: "40px" }}>
                <p style={{ margin: 0 }}>Anbefalte oppskrifter</p>
                <div style={{ marginLeft: "auto" }}>
                    <img src={GreenRightArrow} alt="right_arrow" width="50" height="35"/>
                </div>
            </div>
            <br/>
            <div style={{ display: "flex", alignItems: "center", border: "solid 1px", height: "40px" }}>
                <p style={{ margin: 0 }}>Mine oppskrifter</p>
                <div style={{ marginLeft: "auto" }} >
                    <img src={GreenRightArrow} alt="right_arrow" width="50" height="35"/>
                </div>
            </div>
        </div>
    )
}
export default Recipes;