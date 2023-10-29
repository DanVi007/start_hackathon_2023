import "./recipes.modules.css"
import GreenRightArrow from "../imgs/greenRightArrow.png"
import AllRecipes from "./allRecipes"
import { Link } from 'react-router-dom';
import Lunch from '../imgs/lunch.png'
import Dinner from '../imgs/dinner.png'
import Cake from '../imgs/cake.png'
import Vegetar from '../imgs/vegetar.png'
import SearchBar from "../components/searchBar";
function Recipes() {    
    return(
        <div>
            <h1>Oppskrifter</h1>
            <hr />
            <div class="search-container">
                <SearchBar placeholder={"Søk etter oppskrifter..."}/>
            </div>
            <br/>
            <div class="grid">
                <div class="" style = {{borderRadius:"20%"}}>
                    <img src={Dinner} height="75px"/>
                </div>
                <div class="" style = {{borderRadius:"20%"}}>
                    <img src={Lunch} height="75px"/>
                </div>
                <div class="" style = {{borderRadius:"20%"}}>
                    <img src={Cake} height="76px"/>
                </div>
                <div class="" style = {{borderRadius:"20%"}}>
                    <img src={Vegetar} height="78px"/>
                </div>
            </div>
            <br/><br/>

            <div style={{ borderRadius: "10px", display: "flex", alignItems: "center", border: "solid 1px", height: "40px" }}>
                <p style={{ paddingLeft: "5px", margin: 0 }}>Alle oppskrifter</p>
                <div style={{ marginLeft: "auto" }}>
                    <Link to = "/allRecipes" className = "nav-link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="rgba(24,122,85,1)"></path></svg>
                    </Link>
                </div>
            </div>
            <br/>
            <div style={{ borderRadius: "10px", display: "flex", alignItems: "center", border: "solid 1px", height: "40px" }}>
                <p style={{ paddingLeft: "5px", margin: 0 }}>Anbefalte oppskrifter</p>
                <div style={{ marginLeft: "auto" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="rgba(24,122,85,1)"></path></svg>
                </div>
            </div>
            <br/>
            <div style={{ borderRadius: "10px",display: "flex", alignItems: "center", border: "solid 1px", height: "40px" }}>
                <p style={{ paddingLeft: "5px", margin: 0 }}>Mine oppskrifter</p>
                <div style={{ marginLeft: "auto" }} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="rgba(24,122,85,1)"></path></svg>
                </div>
            </div>
        </div>
    )
}
export default Recipes;