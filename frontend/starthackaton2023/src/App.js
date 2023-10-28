import { Routes, Route } from 'react-router-dom';
import Storage from './pages/storage'
import Recipes from "./pages/recipes"
import "./App.css"
import AllRecipes from './pages/allRecipes';
import RecommendedRecipes from './pages/recommendedRecipes';
function App() {
  return (
    <div className = "padding">
      <Routes>
            <Route path="/" element = {<Storage/>}/>
            <Route path="/storage" element = {<Storage/>}/>
            <Route path="/recipes" element = {<Recipes/>}/>
            <Route path="/allRecipes" element = {<AllRecipes/>}/>
            <Route path="/recommendedRecipes" element = {<RecommendedRecipes/>}/>
      </Routes>
    </div>
  );
}

export default App;
