// imported files
import { recipes } from "../data/recipes.js";
import { filterIngredients , listIngredient } from "./utils/filterIngredients.js";
import { filteAppareils, listAppareil } from "./utils/filterAppareils.js";
import { filterUstensils, listUstensil } from "./utils/filterUstensils.js";
import { filterRecipes, displayRecipes } from "./utils/search.js";

function init(){
  
  // selet filter
  filterIngredients();
  listIngredient(recipes);
  filterUstensils();
  listUstensil(recipes);
  filteAppareils();
  listAppareil(recipes)

  
  
//display recipes
filterRecipes(recipes);
displayRecipes(recipes);
 
  
}



  init()