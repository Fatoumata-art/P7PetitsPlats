// imported files
import { recipes } from "../data/recipes.js";
import { filterDom } from "./utils/filterRecipe.js";
import { createCards } from "./utils/card.js";

function init(){
  // selet filter
  const selet = filterDom();

  //Total recettes
  const totalRecipe = document.getElementById("totalRecipe");
  totalRecipe.textContent =  ` ${ recipes.length} recettes `;
  

 
  recipes.map(recipe => {
    console.log("recette", recipe);
    createCards(recipe);
    //getIngredients(card, recipe)
    
})

}



  init()