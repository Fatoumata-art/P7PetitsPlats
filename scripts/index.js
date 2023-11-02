// imported files
import { recipes } from "../data/recipes.js";
import { filterIngredients , listIngredient } from "./utils/filterIngredients.js";
import { filteAppareils, listAppareil } from "./utils/filterAppareils.js";
import { filterUstensils, listUstensil } from "./utils/filterUstensils.js";
import { filterRecipes, displayRecipes } from "./utils/search.js";

function init(){
  
  // selet filter
  const ingredient = filterIngredients();
  listIngredient(recipes);
  const ustensil = filterUstensils();
  listUstensil(recipes);
  const Appareil = filteAppareils();
  listAppareil(recipes)

  
  

  //Total recettes
  // const totalRecipe = document.getElementById("totalRecipe");
  // totalRecipe.textContent =  ` ${ recipes.length} recettes `;
  
//display recipes
filterRecipes(recipes);
displayRecipes(recipes);
 
  
}



  init()