// imported files
import { recipes } from "../data/recipes.js";
import { filterIngredients , listIngredient } from "./utils/filterIngredients.js";
import { filteAppareils, listAppareil } from "./filterAppareils.js";
import { filterUstensils, listUstensil } from "./utils/filterUstensils.js";
import { displayRecipes, filterRecipes } from "./utils/search.js";

function init(){
  // selet filter
  const ingredient = filterIngredients();
  listIngredient(recipes);
  const ustensil = filterUstensils();
  listUstensil(recipes);
  const Appareil = filteAppareils();
  listAppareil(recipes)

  

  
  
//display recipes

filterRecipes();
displayRecipes(recipes);
 
}

  init()