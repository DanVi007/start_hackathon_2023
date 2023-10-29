import { Routes, Route } from 'react-router-dom';
import Storage from './pages/storage'
import Recipes from "./pages/recipes"
import "./App.css"
import AllRecipes from './pages/allRecipes';
import Recipe from './pages/recipe'
import RecommendedRecipes from './pages/recommendedRecipes';
import NavBar from './components/navbar';
function App() {
  return (
    <div className = "padding">
      <Routes>
            <Route path="/" element = {<Storage/>}/>
            <Route path="/storage" element = {<Storage/>}/>
            <Route path="/recipes" element = {<Recipes/>}/>
            <Route path="/allRecipes" element = {<AllRecipes/>}/>
            <Route path="/recipe" element = {<Recipe/>}/>
            <Route path="/recommendedRecipes" element = {<RecommendedRecipes/>}/>
      </Routes>
      <NavBar/>
    </div>
  );
}

export default App;
