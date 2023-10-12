// imported files
import { recipes } from "../data/recipes.js";
import { createCards } from "./utils/card.js";

function init(){

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
